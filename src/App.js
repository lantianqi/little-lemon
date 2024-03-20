import HomePage from "./HomePage";
import Chicago from "./Chicago";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OnlineOrder from "./OnlineOrder";
import Login from "./Login";
import "./App.css";
import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

function App() {
  const initialAvailableTimes = [{
    time: "17:00",
    available: true
  },
  {
    time: "18:00",
    available: true
  },
  {
    time: "19:00",
    available: true
  },
  {
    time: "20:00",
    available: true
  },
  {
    time: "21:00",
    available: true
  },
  {
    time: "22:00",
    available: true
  }];
  const updateTimes = () => {
    return initialAvailableTimes;
  };
  const initializeTimes = () => {
    return initialAvailableTimes;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/online-order" element={<OnlineOrder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
    // <div className="App">
    // </div>
  );
}

export default App;
