import Footer from "../pages/Footer";
import Home from "../pages/Home";
import PopularSearch from "../pages/PopularSearch";
import Trending from "../pages/Trending";

function Homepage() {
  return (
    <div>
      <Home />
      <Trending />
      <PopularSearch />
      <Footer />
    </div>
  );
}

export default Homepage;
