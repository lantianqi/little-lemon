import "./BookingForm.css";
import Button1 from "./Button1";
import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    res_date: "",
    res_time: "17:00",
    guests: 1,
    occasion: "Select",
    preference: "Select",
    res_name: "",
    res_email: ""
  });

  const [tableInfoConfirmed, setTableInfoConfirmed] = useState(false);
  const [contactInfoConfirmed, setContactInfoConfirmed] = useState(false);
  const [overviewConfirmed, setOverviewConfirmed] = useState(false);
  const [allConfirmed, setAllConfirmed] = useState(false);

  function logFormData() {
    console.log(formData);
  }

  function updateFormData(k, v) {
    setFormData({
      ...formData,
      [k]: v
    })
  }

  function updateFormField(e) {
    updateFormData(e.target.id, e.target.value);
  }

  function confirmTableInfo() {
    setTableInfoConfirmed(true);
  }

  function confirmContactInfo() {
    setContactInfoConfirmed(true);
  }

  function confirmOverview() {
    setOverviewConfirmed(true);
  }

  function confirmAll() {
    setAllConfirmed(true);
  }

  const tableForm = (
    <form className="booking_form">
      <label htmlFor="res_date">Choose date</label>
      <input type="date" id="res_date" value={formData.res_date} onChange={(e) => { updateFormField(e) }} />

      <label htmlFor="res_time">Choose time</label>
      <select id="res_time" value={formData.res_time} onChange={(e) => { updateFormField(e) }}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} onChange={(e) => { updateFormField(e) }}></input>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={(e) => { updateFormField(e) }}>
        <option>Select</option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <label htmlFor="preference">Preference</label>
      <select id="preference" value={formData.preference} onChange={(e) => { updateFormField(e) }}>
        <option>Select</option>
        <option>Inside</option>
        <option>Outside</option>
      </select>

      <Button1 text="Make Your Reservation" onClick={confirmTableInfo} />

      <Button1 text="Log formData" onClick={logFormData} />
    </form>
  );

  const contactForm = (
    <form className="booking_form">
      <label htmlFor="res_name">Name</label>
      <input type="text" id="res_name" value={formData.res_name} onChange={(e) => { updateFormField(e) }} />

      <label htmlFor="res_email">Email</label>
      <input type="email" id="res_email" value={formData.res_email} onChange={(e) => { updateFormField(e) }} />

      <Button1 text="Make Your Reservation" onClick={confirmContactInfo} />

      <Button1 text="Log formData" onClick={logFormData} />
    </form>
  );

  const overview = (
    <div id="overview_page">
      "Overview"
      <Button1 text="overview" onClick={confirmOverview} />
    </div>
  );

  const confirmation = (
    <div id="confirmation_page">
      "Confirmation"
      <Button1 text="confirm" onClick={confirmAll} />
    </div>
  );

  if (!tableInfoConfirmed) {
    return tableForm;
  } else if (!contactInfoConfirmed) {
    return contactForm;
  } else if (!overviewConfirmed) {
    return overview;
  } else if (!allConfirmed) {
    return confirmation;
  } else {
    return "GET OUT";
  }
}

export default BookingForm;
