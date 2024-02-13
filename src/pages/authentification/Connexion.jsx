/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../components/services/AuthServices";
import { setUser, setToken } from "../../components/features/AuthSlice";
import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Connexion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Soumission du formulaire pour connecter un utilisateur
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData.email, formData.password);
      dispatch(setUser(response.user));
      dispatch(setToken(response.token.access));
      toast.success("Vous êtes à présent connecté, amusez-vous!");
      setFormData({
        email: "",
        password: "",
      });
      navigate("/forms");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      toast.error(
        "Votre connexion a échoué. Veuillez vérifier votre connexion internet!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster position="top-left" />
      <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-md mb-5">
        <h2 className="text-gray-800 text-3xl mb-6 font-bold text-center">
          Pulso
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold text-start"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold text-start"
            >
              Mot de Passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Se connecter
          </button>
          <p className="text-sm font-light text-start text-gray-500 dark:text-gray-400 mt-5">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/inscription"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Inscrivez-vous ici
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
