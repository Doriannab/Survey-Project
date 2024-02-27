import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectLienSondageStockes } from "../components/features/SondageSlices";
import { selectToken, selectUserId } from "../components/features/AuthSlice";

import AllInOne from "./AllInOne";
import { useParams } from 'react-router-dom';

const Soumissions = () => {
  const [soumissions, setSoumissions] = useState([]);
  const [question, setQuestion] = useState(""); 
  const token = useSelector(selectToken);
  const user_id = useSelector(selectUserId);
  const lienSondagesStockes = useSelector(selectLienSondageStockes);

  const { sondageId } = useParams();
  console.log("ID du Sondage :", sondageId);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        if (!token || !sondageId) {
          console.log("Pas de Token ou d'ID de sondage. Impossible de voir les soumissions");
          return;
        }

        const sondage = lienSondagesStockes.find(s => s.sondageId == sondageId);

        if (!sondage || sondage.owner !== user_id) {
          console.log("Sondage non trouvé ou non autorisé");
          return;
        }

        const response = await axios.get(
          `https://pulso-backend.onrender.com/api/sondages/${sondageId}/resultats/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSoumissions(response.data.answers);

        const sondageResponse = await axios.get(
          `https://pulso-backend.onrender.com/api/sondages/${sondageId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setQuestion(sondageResponse.data.question);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchSubmissions();
  }, [sondageId, token, user_id, lienSondagesStockes]);

  if (!token) {
    return (
      <div>
        <AllInOne />
        <div className="text-center text-gray-400 text-2xl font-bold mt-40">
          Veuillez vous connecter pour voir les soumissions.
        </div>
      </div>
    );
  }

  if (soumissions.length === 0) {
    return (
      <div>
        <AllInOne />
        <div className="text-center text-gray-400 text-2xl font-bold mt-40">
          Aucune soumission disponible pour ce sondage.
        </div>
      </div>
    );
  }

  const tableRows = soumissions.map((submission, index) => (
    <tr key={index}>
      <td className="border-t border-r border-gray-300 py-2 px-4">{submission.created_at}</td>
      <td className="border-t border-r border-gray-300 py-2 px-4">{submission.choix}</td>
    </tr>
  ));

  return (
    <div className="flex align-center text-center gap-12 justify-center mb-12 flex-col">
      <AllInOne />
      <h1 className="text-2xl font-bold mb-4">
         {question}
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
  );
};

export default Soumissions;
