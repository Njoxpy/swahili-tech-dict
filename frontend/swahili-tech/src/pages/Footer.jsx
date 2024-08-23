import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <h3 className="about-us-footer">About Us</h3>
        <p className="about-us-paragraph">
          TechDict is dedicated to helping individuals understand and navigate
          the terminology used in software localization and
          internationalization. Our goal is to provide clear and concise
          definitions to support developers and contributors in their projects.
        </p>
        <div className="links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>
        <h4 className="footer-copyright">
          © 2024 TechDict. All rights reserved.
        </h4>
      </footer>
    </div>
  );
}

export default Footer;
