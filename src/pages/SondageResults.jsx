import { useState, useEffect } from "react";
import axios from "axios";
import AllInOne from "./AllInOne";

const SondageResults = () => {
  const [results, setResults] = useState(null);
  const sondageId = localStorage.getItem("sondageId");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!accessToken) {
          console.log("Pas de Token. Impossible de voir les resultats");
          return;
        }

        const response = await axios.get(
          `https://pulso-backend.onrender.com/api/sondages/${sondageId}/resultats/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setResults(response.data);
      } catch (error) {
        console.error("Ereur:", error);
      }
    };

    fetchResults();
  }, [sondageId, accessToken]);

  if (!accessToken) {
    return (
      <div>
      <AllInOne/>
      <div className="text-center text-gray-400 text-2xl font-bold mt-40">
        Veuillez vous connecter pour voir les résultats.
      </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div>
      <AllInOne/>
      <div className="text-center text-gray-400 text-2xl font-bold mt-40">
        Aucun résultat disponible pour ce sondage.
      </div>
      </div>
    );
  }

  const { sondage_id, answers } = results;

  const pourcentageOptions = {};
  answers.forEach((answer) => {
    if (pourcentageOptions[answer.choix]) {
      pourcentageOptions[answer.choix]++;
    } else {
      pourcentageOptions[answer.choix] = 1;
    }
  });

  const totalVotes = answers.length;

  const optionPlusElevee = Object.keys(pourcentageOptions).reduce(
    (a, b) => (pourcentageOptions[a] > pourcentageOptions[b] ? a : b),
    ""
  );

  const graphiqueOptionBar = Object.keys(pourcentageOptions).map((option) => (
    <div
      key={option}
      className="mb-4 text-gray-500 font-bold hover:text-gray-600"
    >
      <div className="flex items-center mb-2">
        <div className="w-1/4 text-right pr-5">{option}</div>
        <div className="w-1/2 bg-gray-200 h-6 rounded-full overflow-hidden">
          <div
            className={`h-full bg-blue-500 ${
              option === optionPlusElevee ? "most-frequent" : ""
            }`}
            style={{
              width: `${(pourcentageOptions[option] / totalVotes) * 100}%`,
            }}
          ></div>
        </div>
        <div className="pl-8 text-gray-600">
          {Math.round((pourcentageOptions[option] / totalVotes) * 100)}%
        </div>
      </div>
    </div>
  ));

  return (
    <div>
    <AllInOne/>
    <div className="mt-40 text-center gap-12 font-sans">
      <h1 className="text-2xl font-bold mb-12">
        Résultats du Sondage {sondage_id}
      </h1>
      <div className="options-container">{graphiqueOptionBar}</div>
    </div>
    </div>
  );
};

export default SondageResults;
