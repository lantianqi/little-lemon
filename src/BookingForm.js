import "./BookingForm.css";
import Button1 from "./Button1";
import { useState } from "react";

function BookingForm(availableTimes, dispatch) {
  const [formData, setFormData] = useState({
    res_date: "",
    res_time: "17:00",
    res_guests: 1,
    res_occasion: "Select",
    res_preference: "Select",
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

  function timesList(availableTimes) {
    const timesOptionsList =
      availableTimes.map((t) => {
        return <option key={"time_" + t}>{t}</option>;
      });
    return timesOptionsList;
  }

  const tableForm = (
    <form className="booking_form_view" id="table_form_view">

      <div className="form_fields">
        <label htmlFor="res_date">Choose date</label>
        <input type="date" id="res_date" value={formData.res_date} onChange={(e) => { updateFormField(e) }} />

        <label htmlFor="res_time">Choose time</label>
        <select id="res_time" value={formData.res_time} onChange={(e) => { updateFormField(e) }}>
          {timesList(availableTimes)}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.res_guests} onChange={(e) => { updateFormField(e) }}></input>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.res_occasion} onChange={(e) => { updateFormField(e) }}>
          <option>Select</option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>

        <label htmlFor="preference">Preference</label>
        <select id="preference" value={formData.res_preference} onChange={(e) => { updateFormField(e) }}>
          <option>Select</option>
          <option>Inside</option>
          <option>Outside</option>
        </select>
      </div>

      <div className="form_button_container">
        <div className="form_button_container">
          <Button1 className="form_button" text="Make Your Reservation" onClick={confirmTableInfo} />
          <Button1 className="form_button" text="Log formData" onClick={logFormData} />
        </div>
      </div>

    </form>
  );

  const contactForm = (
    <form className="booking_form_view" id="contact_form_view">

      <div className="form_fields">
        <label htmlFor="res_name">Name</label>
        <input type="text" id="res_name" value={formData.res_name} onChange={(e) => { updateFormField(e) }} />

        <label htmlFor="res_email">Email</label>
        <input type="email" id="res_email" value={formData.res_email} onChange={(e) => { updateFormField(e) }} />
      </div>

      <div className="form_button_container">
        <Button1 className="form_button" text="Make Your Reservation" onClick={confirmContactInfo} />
        <Button1 className="form_button" text="Log formData" onClick={logFormData} />
      </div>

    </form>
  );

  const overview = (
    <div className="booking_form_view" id="overview_view">

      <div className="form_fields">
        <fieldset>
          <h1>Table Information</h1>
          <h2>Date</h2>
          <p>{formData.res_date}</p>
          <h2>Time</h2>
          <p>{formData.res_time}</p>
          <h2>Number of guests</h2>
          <p>{formData.res_guests}</p>
          <h2>Occasion</h2>
          <p>{formData.res_occasion}</p>
          <h2>Preference</h2>
          <p>{formData.res_preference}</p>
        </fieldset>
        <fieldset>
          <h1>Contact Information</h1>
          <h2>Name</h2>
          <p>{formData.res_name}</p>
          <h2>Email</h2>
          <p>{formData.res_email}</p>
        </fieldset>
      </div>

      <div className="form_button_container">
        <Button1 className="form_button" text="confirm" onClick={confirmOverview} />
        <Button1 className="form_button" text="Log formData" onClick={logFormData} />
      </div>

    </div>
  );

  const confirmation = (
    <div className="booking_form_view" id="confirmation_view">

      <div className="form_fields">
        confirmation
      </div>

      <div className="form_button_container">
        <Button1 className="form_button" text="confirm" onClick={confirmAll} />
        <Button1 className="form_button" text="Log formData" onClick={logFormData} />
      </div>

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