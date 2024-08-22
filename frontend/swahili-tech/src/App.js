import "./index.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}

export default App;
