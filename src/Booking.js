import BookingForm from "./BookingForm";

import "./Booking.css";

function Booking() {
  return (
    <div id="booking_container">

      <div id="before_booking_form" className="booking_sub_container">
        Before Booking Form
      </div>

      <div id="booking_form_container" className="booking_sub_container">
        <BookingForm />
      </div>

      <div id="after_booking_form" className="booking_sub_container">
        After Booking Form
      </div>

    </div>
  );
}

export default Booking;
