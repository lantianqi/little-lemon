import "./BookingForm.css";
import Button1 from "./Button1";
import { useState } from "react";

function BookingForm() {
  const [tableInfoConfirmed, setTableInfoConfirmed] = useState(false);
  const [contactInfoConfirmed, setContactInfoConfirmed] = useState(false);
  const [overviewConfirmed, setOverviewConfirmed] = useState(false);
  const [allConfirmed, setAllConfirmed] = useState(false);
  const [formData, setFormData] = useState({});

  function updateTableInfo() {
    setTableInfoConfirmed(true);
  }

  function updateContactInfo() {
    setContactInfoConfirmed(true);
  }

  function updateOverviewConfirmed() {
    setOverviewConfirmed(true);
  }

  function updateContactInfo(e) {
    // e.preventDefaultEvent();
    setContactInfoConfirmed(true);
  }

  function updateAllConfirmed() {
    setAllConfirmed(true);
  }

  const tableForm = (
    <form id="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label for="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests"></input>

      <label for="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <label for="preference">Preference</label>
      <select id="preference">
        <option>Inside</option>
        <option>Outside</option>
      </select>

      {/* <input type="submit" value="Make Your reservation"></input> */}
      <Button1 text="Make Your Reservation"
        onClick={updateTableInfo}
      />
    </form>
  );

  if (!tableInfoConfirmed) {
    return tableForm;
  } else if (!contactInfoConfirmed) {
    return <Button1 text="contact" onClick={updateContactInfo} />;
  }
  else if (!overviewConfirmed) {
    return <Button1 text="overview" onClick={updateOverviewConfirmed} />;
  } else if (!allConfirmed) {
    return <Button1 text="confirmed" onClick={updateAllConfirmed} />;
  }
}

export default BookingForm;
