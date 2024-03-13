import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

import logo from "./assets/logo.jpg";

function Nav() {
  return (
    <nav>

      <div id="nav-logo">
        <img src={logo} height={40} alt="logo" />
      </div>

      <div id="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/online-order" className="nav-item">Online Order</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </div>

    </nav>
  );
}

export default Nav;
