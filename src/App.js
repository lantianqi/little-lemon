import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Chicago from "./Chicago";
import Menu from "./Menu";
import Booking from "./Booking";
import "./App.css";
import "./styles.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Booking />} />
      </Routes>

      <Footer />

    </>
    // <div className="App">
    // </div>
  );
}

export default App;
