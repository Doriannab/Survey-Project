/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../components/services/AuthServices";
import { setUser, setToken } from "../../components/features/AuthSlice";
import { Toaster, toast } from "sonner";

const Inscription = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    tc: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(
        formData.email,
        formData.password,
        formData.password2,
        formData.name,
        formData.tc
      );
      dispatch(setUser(response.user));
      dispatch(setToken(response.token));
      toast.success("Vous êtes à présent inscrit, amusez-vous!");
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
        tc: false,
      });
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error(
        "Votre inscription a échoué. Veuillez vérifier votre connexion internet!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <Toaster />
      <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-md backdrop-filter backdrop-blur-sm">
        <h2 className="text-gray-800 text-3xl mb-6 font-bold text-center">
          Pulso
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nom"
              className="block text-gray-700 text-sm font-bold text-start"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
              htmlFor="mdp"
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
          <div>
            <label
              htmlFor="confirmerMdp"
              className="block text-gray-700 text-sm font-bold text-start"
            >
              Confirmer Mot de Passe
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="tc"
              name="tc"
              checked={formData.tc}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="tc" className="text-gray-700 text-sm font-bold">
              J'accepte les termes et conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            S'inscrire
          </button>
          <p className="text-sm font-light text-start text-gray-500 dark:text-gray-400 mt-4">
            Vous avez déjà un compte ?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Connectez-vous ici
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
