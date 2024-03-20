import BookingForm from "./BookingForm";

import "./BookingPage.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function BookingPage() {
  return (
    <>
      <Header />
    <Nav />
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
    <Footer />
    </>
  );
}

export default BookingPage;
