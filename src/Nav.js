import { Link } from "react-router-dom";
import "./CSS/Nav.css";

function Nav({ bigWindow }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="nav-item">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/online-order" className="nav-item">
            Online Order
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-item">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
