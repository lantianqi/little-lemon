import menu from "./assets/menu.svg";
import basket from "./assets/basket.svg";
import logo from "./assets/logo.jpg";

function Header() {
  return (
    <header className="headerContainer">
      <div id="headerMenuIcon" className="headerColumn">
        <img src={menu} height={15} alt="menu icon" />
      </div>
      <div id="headerLogo" className="headerColumn">
        <img src={logo} height={30} alt="logo" />
      </div>
      <div id="headerBasketIcon" className="headerColumn">
        <img src={basket} height={20} alt="basket icon" />
      </div>
    </header>
  );
}

export default Header;
