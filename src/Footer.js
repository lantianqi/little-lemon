import { Link } from "react-router-dom";
import logo from "./assets/vertical-logo.png";
import "./CSS/Footer.css";

function Footer() {
  return (
    <footer>
      <div id="footerLogo" className="footerColumn">
        <img src={logo} height={100} alt="logo" />
      </div>
      <div id="footerDoormatNav" className="footerColumn">
        <div className="footerColumnTitle">Doormat Navigation</div>
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
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div id="footerContact" className="footerColumn">
        <div className="footerColumnTitle">Contact</div>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div id="footerSocialMedia" className="footerColumn">
        <div className="footerColumnTitle">Social Media Links</div>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
