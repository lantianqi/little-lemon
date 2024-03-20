import HomePage from "./HomePage";
import Chicago from "./Chicago";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OnlineOrder from "./OnlineOrder";
import Login from "./Login";
import "./App.css";
import "./styles.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/online-order" element={<OnlineOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
    // <div className="App">
    // </div>
  );
}

export default App;
