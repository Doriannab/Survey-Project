import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white p-4 flex items-center justify-between fixed w-full">
        <div>
          <NavLink to="/">
            <p className="text-gray-800 text-2xl font-bold">Pulso</p>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavLink className="text-gray-400 font-bold hover:text-gray-600">
            Sondages
          </NavLink>
          <NavLink className="text-gray-400 font-bold hover:text-gray-600">
            Résultats
          </NavLink>
          <NavLink className="text-gray-400 font-bold hover:text-gray-600">
            Connexion
          </NavLink>
          <NavLink className="text-gray-400 font-bold hover:text-gray-600">
            Inscription
          </NavLink>
          <NavLink to="/forms">
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Créer un formulaire
            </button>
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 text-3xl hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 text-2xl right-0 bg-white p-4 border shadow-md w-screen md:w-auto">
              <NavLink className="block text-gray-400 font-bold hover:text-gray-600 mb-2 text-center">
                Sondages
              </NavLink>
              <NavLink className="block text-gray-400 font-bold hover:text-gray-600 mb-2 text-center">
                Résultats
              </NavLink>
              <NavLink className="block text-gray-400 font-bold hover:text-gray-600 mb-2 text-center">
                Connexion
              </NavLink>
              <NavLink className="block text-gray-400 font-bold hover:text-gray-600 mb-2 text-center">
                Inscription
              </NavLink>
              <NavLink to="/forms">
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                  Créer un formulaire
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
