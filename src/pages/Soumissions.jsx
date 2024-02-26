import { useState, useEffect } from "react";
import axios from "axios";
import AllInOne from "./AllInOne";



const Soumissions = () => {
  const [results, setResults] = useState(null);
  const sondageId = localStorage.getItem("sondageId");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!accessToken) {
          console.log("Pas de Token. Impossible de voir les résultats");
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
        console.error("Erreur:", error);
      }
    };

    fetchResults();
  }, [sondageId, accessToken]);

  if (!accessToken) {
    return (
      <div className="text-center text-gray-400 text-2xl font-bold mt-40">
        Veuillez vous connecter pour voir les résultats.
      </div>
    );
  }

  if (!results) {
    return (
      
      <div className="">
      <AllInOne/>
      <div className="text-center text-gray-400 text-2xl font-bold mt-40">
        Aucun Soumissions disponible pour ce sondage.
      </div>
      </div>
    );
  }
  
  const { sondage_id, answers } = results;
  
  if (!Array.isArray(answers)) {
    return (
      <div>
      <AllInOne/>
      <div className="text-center text-gray-400 text-2xl font-bold mt-40">
        Les résultats du sondage ne sont pas disponibles sous un format valide.
      </div>
      </div>
    );
  }
  
  const tableRows = answers.map((answer, index) => (
    <tr key={index}>
      <td className="border-t border-r border-gray-300 py-2 px-4">{answer.created_at}</td>
      <td className="border-t border-r border-gray-300 py-2 px-4">{answer.choix}</td>
    </tr>
  ));
  

  return (
    <div>
    <AllInOne/>
    <div className="flex align-center text-center gap-12 justify-center mt-36 flex-col font-sans">
      <h1 className="text-2xl font-bold mb-4">
        Soumissions du Sondage {sondage_id}
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r">Created At</th>
            <th className="py-2 px-4 border-b">Choix</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
    </div>
  );
};

export default Soumissions;
