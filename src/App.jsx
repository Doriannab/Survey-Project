import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './output.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <p className="w-full bg-black text-red-500">Bienvenue</p>   
    </div>
  )
}

export default App
