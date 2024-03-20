import HomePage from "./HomePage";
import Chicago from "./Chicago";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OnlineOrder from "./OnlineOrder";
import Login from "./Login";

import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const updateTimes = (state, action) => {
  switch (action.type) {
    case "SELECT":
      console.log(state);
      console.log(action.selectedDate);
      return state;
    default:
      console.log("default case");
  }
  return initialAvailableTimes;
};
const initializeTimes = () => { return initialAvailableTimes; };

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialAvailableTimes, initializeTimes);

  return (
    <Routes role="routes">
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<Chicago />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      <Route path="/online-order" element={<OnlineOrder />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Main;