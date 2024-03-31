import HomePage from "./HomePage";
import Chicago from "./Chicago";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OnlineOrder from "./OnlineOrder";
import Login from "./Login";
import ConfirmedBooking from "./ConfirmedBooking";

import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "./api";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
};

const initializeTimes = () => {
  return fetchAPI(new Date());
};

function Main() {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );
  const navigate = useNavigate();

  const submitForm = (e, formData) => {
    e.preventDefault();
    try {
      const response = submitAPI(formData);
      if (response) {
        alert("Submitted!");
        navigate("/confirmed-booking");
      } else {
        throw new Error("Form could not be submitted to the server.");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Routes role="routes">
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<Chicago />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/reservations"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/online-order" element={<OnlineOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;
