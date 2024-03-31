import "./BookingForm.css";
import Button1 from "./Button1";
// import { useState } from "react";

import * as yup from "yup";
import { useFormik } from "formik";

function BookingForm({ availableTimes, dispatchOnDateChange, submitForm }) {
  const TimesList = (props) => {
    const timesList = props.availableTimes?.map((t) => {
      return (
        <option
          id={"option" + t}
          key={"option" + t}
          value={t}
          className="time_slot"
          data-testid="booking_time_option"
        >
          {t}
        </option>
      );
    });
    return timesList;
  };
  const formik = useFormik({
    initialValues: {
      res_date: "",
      res_time: "",
      res_guests: 1,
      res_occasion: "",
      res_preference: "",
      res_name: "",
      res_email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      res_date: yup
        .date()
        .required("Please provide a valid value for this field.")
        .min(new Date(), "Please provide a date later than today."),
      res_time: yup
        .mixed()
        .required("Please provide a valid value for this field.")
        .oneOf(availableTimes),
      res_guests: yup
        .number()
        .required("Please provide a valid value for this field.")
        .min(1, "There must be at least 1 guest.")
        .max(10, "We can only serve at most 10 guests."),
      res_occasion: yup
        .mixed()
        .oneOf(["none", "birthday", "engagement", "anniversary"], "Please select from the options.")
        .defined("Please select from the options."),
      res_preference: yup
        .mixed()
        .oneOf(["none", "inside", "outside"], "Please select from the options.")
        .defined("Please select from the options."),
      res_name: yup
        .string()
        .required("Please provide a valid value for this field.")
        .min(2, "Please provide a name that has at least 2 characters.")
        .max(50, "Please provide a name that has at most 50 characters"),
      res_email: yup
        .string()
        .email("Please provide a valid email address.")
        .required("Please provide a valid value for this field."),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="booking_form_view" id="booking_input_view">
        <label htmlFor="res_date">Date</label>
        <input
          type="date"
          id="res_date"
          name="res_date"
          {...formik.getFieldProps("res_date")}
          onChange={(e) => {
            formik.setValues({
              ...formik.values,
              res_date: e.target.value,
            });
            dispatchOnDateChange({
              type: "UPDATE_TIMES",
              date: new Date(e.target.value),
            });
          }}
        />
        {
          <div className="form_error">
            {formik.touched.res_date && formik.errors.res_date}
          </div>
        }
        <label htmlFor="res_time">Time</label>
        <select
          id="res_time"
          name="res_time"
          {...formik.getFieldProps("res_time")}
        >
          <option value="-">--Please choose an option--</option>
          {<TimesList availableTimes={availableTimes} />}
        </select>
        {
          <div className="form_error">
            {formik.touched.res_time && formik.errors.res_time}
          </div>
        }
        <label htmlFor="res_guests">Number of guests</label>
        <input
          type="number"
          id="res_guests"
          name="res_guests"
          {...formik.getFieldProps("res_guests")}
        />
        {
          <div className="form_error">
            {formik.touched.res_guests && formik.errors.res_guests}
          </div>
        }
        <label htmlFor="res_occasion">Occasion</label>
        <select
          as="select"
          id="res_occasion"
          name="res_occasion"
          {...formik.getFieldProps("res_occasion")}
          onChange={(e) => {
            formik.setFieldValue("res_occasion", e.target.value);
          }}
        >
          <option value="-">--Please choose an option--</option>
          <option value="none">None</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {
          <div className="form_error">
            {formik.touched.res_occasion && formik.errors.res_occasion}
          </div>
        }
        <label htmlFor="res_preference">Preference</label>
        <select
          id="res_preference"
          name="res_preference"
          {...formik.getFieldProps("res_preference")}
        >
          <option value="-">--Please choose an option--</option>
          <option value="none">None</option>
          <option value="inside">Inside</option>
          <option value="outside">Outside</option>
        </select>
        {
          <div className="form_error">
            {formik.touched.res_preference && formik.errors.res_preference}
          </div>
        }
        <label htmlFor="res_name">Name</label>
        <input
          type="text"
          id="res_name"
          name="res_name"
          {...formik.getFieldProps("res_name")}
        />
        {
          <div className="form_error">
            {formik.touched.res_name && formik.errors.res_name}
          </div>
        }
        <label htmlFor="res_email">Email</label>
        <input
          type="email"
          id="res_email"
          name="res_email"
          {...formik.getFieldProps("res_email")}
        />
        {
          <div className="form_error">
            {formik.touched.res_email && formik.errors.res_email}
          </div>
        }
        <div className="form_button_container">
          <Button1 type="submit" text="Confirm" onClick={formik.handleSubmit} disabled={!formik.isValid} />
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
