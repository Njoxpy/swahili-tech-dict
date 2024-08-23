import "./index.css";
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
import Homepage from "./Home/Homepage";
import WordDetailsLayouts from "./layouts/WordLayout";
import Word from "./pages/Word";
import TermsDetails from "./pages/TermDetails";
import SearchLayout from "./layouts/SearchLayout";
import Search from "./pages/Search";
import SearchDetails from "./pages/SearchDetails";
import Contribute from "./pages/Contribute";
import Help from "./pages/Help";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/terms" element={<WordDetailsLayouts />}>
        <Route index element={<Word />} />
        <Route path=":id" element={<TermsDetails />} />
      </Route>
      <Route path="/search" element={<SearchLayout />}>
        <Route index element={<Search />} />
        <Route path=":term" element={<SearchDetails />} />
      </Route>
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
