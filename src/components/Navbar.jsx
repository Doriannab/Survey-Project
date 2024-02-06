import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white p-4 flex items-center justify-between fixed w-full">
        <div>
          <p className="text-2xl font-bold">Pulso</p>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Sondages
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Résultats
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Connexion
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Inscription
          </a>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            Créer
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white p-4 border shadow-md w-screen md:w-auto">
              <a
                href="#"
                className="block text-gray-800 hover:text-gray-600 mb-2 text-center"
              >
                Sondages
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-gray-600 mb-2 text-center"
              >
                Résultats
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-gray-600 mb-2 text-center"
              >
                Connexion
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-gray-600 mb-2 text-center"
              >
                Inscription
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Créer un formulaire
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
