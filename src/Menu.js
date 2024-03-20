import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Menu() {
  return (
    <>
      <Header />
      <Nav />
      <div className="menu">
        <div className="menu-content">
          <h1>Menu</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
