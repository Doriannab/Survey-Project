/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <div className="text-center">
        <h1 className="text-gray-800 text-5xl font-black mb-8">
          La façon la plus simple de créer des sondages
        </h1>
        <h3 className="text-gray-800 my-12 text-2xl">
          Dites adieu aux formulaires ennuyeux. Rencontrez Pulso — le générateur{" "}
          <br />
          gratuit de formulaires, intuitifs que vous recherchiez.
        </h3>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          className="px-4 py-2 my-12 rounded-md"
        >
          Créer un formulaire
        </Button>
        <p>Pas d'authentification requise</p>
      </div>
    </div>
  );
};

export default Home;
