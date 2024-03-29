import "./BookingForm.css";
import Button1 from "./Button1";
import { useState } from "react";

function BookingForm({
  availableTimes,
  dispatchOnDateChange,
  submitForm
}) {
  const [formData, setFormData] = useState({
    res_date: "",
    res_time: "",
    res_guests: 1,
    res_occasion: "Select",
    res_preference: "Select",
    res_name: "",
    res_email: ""
  });

  const [inputConfirmed, setInputConfirmed] = useState(false);

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

  function confirmInput() {
    setInputConfirmed(true);
  }

  const TimesList = (props) => {
    const timesList = props.availableTimes?.map((t) => {
      return (
        <option
          id={"option" + t}
          key={"option" + t}
          value={t}
          className="time_slot"
          data-testid="booking_time_option"
        >{t}</option>
      );
    });
    return timesList;
  };

  const handleDateChange = e => {
    setFormData({
      ...formData,
      res_date: e.target.value
    });
    dispatchOnDateChange({type: "UPDATE_TIMES", date: new Date(e.target.value)});
  };

  return (
    <form id="booking_form" onSubmit={submitForm}>
      <div className="booking_form_view" id="input_view" hidden={inputConfirmed}>
        <h1>Book Now</h1>

        <div className="form_fields">
          <label htmlFor="res_date">Choose date</label>
          <input type="date" id="res_date" value={formData.res_date} onChange={handleDateChange} />

          <label htmlFor="res_time">Choose time</label>
          <select id="res_time" value={formData.res_time} placeholder="Select a time..." onChange={(e) => { updateFormField(e) }}>
            {<TimesList availableTimes={availableTimes} />}
          </select>

          <label htmlFor="res_guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="res_guests" value={formData.res_guests} onChange={(e) => { updateFormField(e) }}></input>

          <label htmlFor="res_occasion">Occasion</label>
          <select id="res_occasion" value={formData.res_occasion} onChange={(e) => { updateFormField(e) }}>
            <option>Select</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>

          <label htmlFor="res_preference">Preference</label>
          <select id="res_preference" value={formData.res_preference} onChange={(e) => { updateFormField(e) }}>
            <option>Select</option>
            <option>Inside</option>
            <option>Outside</option>
          </select>
        </div>

        <div className="form_fields">
          <label htmlFor="res_name">Name</label>
          <input type="text" id="res_name" value={formData.res_name} onChange={(e) => { updateFormField(e) }} />

          <label htmlFor="res_email">Email</label>
          <input type="email" id="res_email" value={formData.res_email} onChange={(e) => { updateFormField(e) }} />
        </div>

        <div className="form_button_container">
          <Button1 className="form_button" text="Make Your Reservation" onClick={confirmInput} />
          <Button1 className="form_button" text="Log formData" onClick={logFormData} />
        </div>

      </div>

      <div className="booking_form_view" id="overview_view" hidden={!inputConfirmed}>

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
          <Button1 className="form_button" text="confirm" onClick={submitForm} />
          <Button1 className="form_button" text="Log formData" onClick={logFormData} />
        </div>

      </div>
    </form>
  );
}

export default BookingForm;