import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function OnlineOrder() {
  return (
    <>
      <Header />
      <Nav />
      <div className="online_order_container">
        <h1>Online Order</h1>
      </div>
      <Footer />
    </>
  );
}

export default OnlineOrder;