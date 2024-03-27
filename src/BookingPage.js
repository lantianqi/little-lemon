import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage({
  availableTimes,
  dispatchOnDateChange,
  submitForm
}) {
  return (
    <>
      <div id="booking_container">

        <div id="before_booking_form" className="booking_sub_container">
          Before Booking Form
        </div>

        <div id="booking_form_container" className="booking_sub_container">
          <BookingForm
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            submitForm={submitForm} />
        </div>

        <div id="after_booking_form" className="booking_sub_container">
          After Booking Form
        </div>

      </div>
    </>
  );
}

export default BookingPage;
