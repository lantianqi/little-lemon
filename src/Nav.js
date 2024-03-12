import logo from "./assets/logo.jpg";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <img src={logo} height={30} alt="logo" />
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
