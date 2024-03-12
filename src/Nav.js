import logo from "./assets/logo.jpg";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div id="navLogo">
        <img src={logo} height={40} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="menu">Menu</a>
        </li>
        <li>
          <a href="reservations">Reservations</a>
        </li>
        <li>
          <a href="online order">Online Order</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
