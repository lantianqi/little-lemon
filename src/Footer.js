import logo from "./assets/vertical-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div id="footerLogo" className="footerColumn">
        <img src={logo} height={70} alt="logo" />
      </div>
      <div id="footerDoormatNav" className="footerColumn">
        doormatNav
      </div>
      <div id="footerContact" className="footerColumn">
        contact
      </div>
      <div id="footerSocialMedia" className="footerColumn">
        socialMedia
      </div>
    </footer>
  );
}

export default Footer;
