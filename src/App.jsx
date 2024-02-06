import "./App.css";
// import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
