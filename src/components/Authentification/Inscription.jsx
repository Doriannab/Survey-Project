import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    mdp: '',
    confirmerMdp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form :', formData);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-md backdrop-filter backdrop-blur-sm">
    <h2 className="text-3xl font-bold mb-6">Inscription</h2>
      <p className="text-gray-700 text-md mb-6 text-start">
        Explorez Pulso, créez des sondages captivants, partagez-les partout.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-gray-700 text-sm font-bold text-start">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold text-start">
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
          <label htmlFor="mdp" className="block text-gray-700 text-sm font-bold text-start">
            Mot de Passe
          </label>
          <input
            type="password"
            id="mdp"
            name="mdp"
            value={formData.mdp}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmerMdp" className="block text-gray-700 text-sm font-bold text-start">
            Confirmer Mot de Passe
          </label>
          <input
            type="password"
            id="confirmerMdp"
            name="confirmerMdp"
            value={formData.confirmerMdp}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          S'inscrire
        </button>
        <p className="text-sm font-light text-start text-gray-500 dark:text-gray-400 mt-4">
 Vous avez déjà un compte ? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Connectez-vous ici</a>
</p>
      </form>
    </div>
    </div>
  );
};

export default Inscription;
