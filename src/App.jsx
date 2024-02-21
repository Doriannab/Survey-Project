import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Templates from "./layouts/Templates";
import Inscription from "./pages/authentification/Inscription";
import Connexion from "./pages/authentification/Connexion";
import Sondages from "./pages/Sondages";
// import Graphique from "./pages/Graphique";
import SondageLink from "./pages/SondageLink";
import SondageResults from "./pages/SondageResults";
import ShareLink from "./pages/ShareLink";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Templates />}>
        <Route index element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/sondages" element={<Sondages />} />
        <Route path="/sondages/:slug" element={<SondageLink />} />
        <Route path="/sondages/resultats" element={<SondageResults />} />
        <Route path="/resultats" element={<SondageResults />} />
        <Route path="/share-link" element={<ShareLink />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
