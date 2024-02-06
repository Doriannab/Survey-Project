import "./App.css";
// import "./output.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Templates from "./layouts/Templates";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Templates />}>
        <Route index element={<Home />} />
        <Route path="/forms" element={<Forms />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
