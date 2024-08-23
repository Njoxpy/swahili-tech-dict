import { Outlet, Link } from "react-router-dom";
import "../index.css"

function RootLayout() {
  return (
    <div>
      <header>
        <h2>
          <Link to="/" className="logo">
            Swahili Tech Dict
          </Link>
        </h2>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">Contact</Link>
            </li>
            <li>
              <Link to="/contribute" className="nav-item">Contribute</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default RootLayout;
