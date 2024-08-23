import { Link } from "react-router-dom";
import Footer from "./Footer";

function Contribute() {
  const repoLink = "https://github.com/Njoxpy/swahili-tech-dict";
  return (
    <div className="contribute-section">
      <h1>Seeking to contribute?</h1>
      <p>
        found a term which is not available into the repository, visit{" "}
        <Link to={repoLink}>github repo </Link>
        to contribute, see contributing guide into how to contribute into the
        project.
      </p>
      <Footer />
    </div>
  );
}

export default Contribute;
