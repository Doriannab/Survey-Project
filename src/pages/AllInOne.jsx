import { Link } from "react-router-dom";

const AllInOne = () => {
  return (
    <div>
      <nav className="mb-4">
        <ul className="flex space-x-4 ms-4 mt-20 ">
          <li>
            <Link
              to="/sondages/resultats"
              className="text-gray-400 font-bold hover:text-red-700 focus:text-gray-600"
            >
              Résultats
            </Link>
          </li>
          <li>
            <Link
              to="/soumissions"
              className="text-gray-400 font-bold hover:text-green-700 focus:text-gray-600"
            >
              Soumissions
            </Link>
          </li>
          <li>
            <Link
              to="/share-link"
              className="text-gray-400 font-bold hover:text-blue-700 focus:text-gray-600"
            >
              Liens
            </Link>
          </li>
        </ul>
        <hr className="w-76 mx-4 " />
      </nav>
    </div>
  );
};

export default AllInOne;
