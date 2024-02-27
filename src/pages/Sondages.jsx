/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { selectToken, selectUserId } from "../components/features/AuthSlice";
import { useNavigate } from "react-router";
import { selectLienSondageStockes } from "../components/features/SondageSlices";


const Sondages = () => {
  const [sondages, setSondages] = useState([]);
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const lienSondagesStockes = useSelector(selectLienSondageStockes);

  useEffect(() => {
    if (token) {
      axios
        .get("https://pulso-backend.onrender.com/api/sondages/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userSondages = response.data.filter((survey) => {
            return survey.owner === parseInt(userId);
          });

          const filteredSondageIds = lienSondagesStockes
            .filter((s) => userSondages.map((sondage) => sondage.id).includes(s.sondageId))
            .map((s) => s.sondageId);

          console.log("Sondage Ids:", filteredSondageIds);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          axios
            .get("https://pulso-backend.onrender.com/api/sondages/", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              const userSondages = response.data.filter((survey) => {
                return survey.owner === parseInt(localStorage.getItem("user"));
              });
              setSondages(userSondages);
              setLoading(false);
            })
            .catch((error) => {
              if (axios.isAxiosError(error) && error.response?.status === 401) {
                console.log("Unauthorized error, refreshing token...");
                dispatch(
                  refreshAccessTokenAsync(localStorage.getItem("refreshToken"))
                );
              } else {
                console.error("Error fetching surveys:", error);
                setLoading(false);
              }
            });
        }
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };


          setSondages(userSondages);
        })
        .catch((error) => {
          console.error("Error fetching surveys:", error);
        });
    }
  }, [token, userId, lienSondagesStockes]);

  const handleClick = (sondageId) => {
    navigate(`/resultats/${sondageId}`);
  };

  return (

    <div className="mt-40 text-center font-sans">
      {(!token || sondages.length === 0) && (
        <div className="text-center text-gray-400 text-2xl font-bold">
          {token
            ? "Aucun sondage à afficher pour l'utilisateur connecté. Veuillez créer d'abord vos sondages pour qu'ils puissent s'afficher ici !"
            : "Veuillez vous connecter pour voir vos sondages existants."}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {sondages.length === 1 ? (
          <div
            key={sondages[0].id}
            className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-200 bg-opacity-75 m-2"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 py-3 bg-slate-500 text-white">
                {sondages[0].question}
              </div>
              <ul className="list-disc text-gray-700 text-base">
                {sondages[0].options.map((option, index) => (
                  <li key={index}>{`${index + 1}. ${option}`}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          sondages.map((survey) => (
            <div
              key={survey.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white m-2 w-72 text-center"
              onClick={() => handleClick(survey.id)}

            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 py-3 bg-slate-500 text-white">
                  {sondage[0].question}
                </div>
                <ul className="list-disc text-gray-700 text-base">
                  {sondage[0].options.map((option, index) => (
                    <li key={index}>{`${index + 1}. ${option}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            sondage.map((survey) => (
              <div
                key={survey.id}
                className="rounded-lg overflow-hidden shadow-lg bg-white m-2 w-72 text-center"
                onClick={handleClick}
              >
                <div className="py-4">
                  <div className="font-bold text-xl mb-2 py-3 bg-slate-500 text-white ">
                    {survey.question}
                  </div>
                  <ol className=" text-gray-400 font-bold hover:text-gray-600 text-start px-5">
                    {survey.options.map((option, index) => (
                      <li key={index}>{`${index + 1}. ${option}`}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Sondages;
