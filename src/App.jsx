import './App.css';
import './output.css';
import Connexion from './components/Authentification/connexion';
import Inscription from './components/Authentification/Inscription';


function App() {

  return (
    <div className='bg-gray-200'>
     <p className="w-full bg-black text-red-500">Bienvenue</p>   
     <Connexion />
     <Inscription />
    </div>
  )
}

export default App
