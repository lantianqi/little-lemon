import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Chicago() {
  return (
    <>
      <Header />
      <Nav />
      <div className="chicago">
        <div className="chicago-content">
          <h1>About Little Lemon</h1>
          <h1>Chicago</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chicago;
