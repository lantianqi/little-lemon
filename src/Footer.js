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
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
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
