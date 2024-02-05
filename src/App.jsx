import './App.css';
import './output.css';
import Connexion from './components/Authentification/connexion';
import Inscription from './components/Authentification/Inscription';
import Accueil from './components/Accueil';


function App() {

  return (
    <div className=''>
     <Connexion />
     <Inscription />
     <Accueil />
    </div>
  )
}

export default App
