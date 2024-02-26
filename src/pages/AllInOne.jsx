import { Link } from 'react-router-dom';

const AllInOne = () => {
  return (
    <div className='text-center text-gray-600 '> 
      <nav className="mb-4 text-center justify-center">
        <ul className="flex gap-10 ms-4 item-center mt-20 text-center text-gray-600">
      
          <li>
            <Link to="/sondages/resultats" className=" text-center text-gray-400 font-bold hover:text-gray-600 focus:text-gray-600">
              Resultats
            </Link>
          </li>
          <li>
            <Link to="/soumissions" className="text-gray-400 font-bold hover:text-gray-600 focus:text-gray-600">
              Soumissions
            </Link>
          </li>
          <li>
            <Link to="/share-link" className="text-gray-400 font-bold hover:text-gray-600 focus:text-gray-600">
              Liens
            </Link>
          </li>
          
        </ul>
        <hr className='w-76 mx-4 '/>
      </nav>
    </div>
  );
};

export default AllInOne;
