/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire :", formData);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-md mb-5">
        <h2 className="text-3xl font-bold mb-6 mt-5 text-start">Connexion</h2>
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
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Inscrivez-vous ici
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
