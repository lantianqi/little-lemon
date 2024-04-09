import "./CSS/BookingForm.css";
import Button from "./Button";
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
      submitForm(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      res_date: yup
        .date()
        .required("Please provide a valid value for this field.")
        .min(new Date(), "Please provide a date later than today."),
      res_time: yup
        .mixed()
        .notOneOf(["-"])
        .required("Please provide a valid value for this field."),
      res_guests: yup
        .number()
        .required("Please provide a valid value for this field.")
        .min(1, "There must be at least 1 guest.")
        .max(10, "We can only serve at most 10 guests."),
      res_occasion: yup
        .mixed()
        .oneOf(
          ["none", "birthday", "engagement", "anniversary"],
          "Please select from the options.",
        )
        .defined("Please select from the options."),
      res_preference: yup
        .mixed()
        .oneOf(["none", "inside", "outside"], "Please select from the options.")
        .defined("Please select from the options."),
      res_name: yup
        .string()
        .required("Please provide a valid value for this field.")
        .min(2, "Please provide a name that has at least 2 characters.")
        .max(50, "Please provide a name that has at most 50 characters."),
      res_email: yup
        .string()
        .email("Please provide a valid email address.")
        .required("Please provide a valid value for this field."),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} className="booking_form">
      <div className="form_heading">
        {formik.dirty && formik.isValid ? <p>All good</p> : <p>Hold on</p>}
      </div>
      <div className="booking_form_view" id="booking_input_view">
        <label htmlFor="res_date">Date</label>
        <input
          type="date"
          id="res_date"
          name="res_date"
          {...formik.getFieldProps("res_date")}
          onChange={async (e) => {
            formik.setValues({
              ...formik.values,
              res_date: e.target.value,
            });
            await dispatchOnDateChange({
              type: "UPDATE_TIMES",
              date: new Date(e.target.value),
            });
          }}
        />
        {
          <div className="form_error" data-testid="res_date_error">
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
          <div className="form_error" data-testid="res_time_error">
            {formik.touched.res_time && formik.errors.res_time}
          </div>
        }
        <label htmlFor="res_guests">Number of guests</label>
        <input
          type="number"
          id="res_guests"
          name="res_guests"
          placeholder="1~10 guests"
          {...formik.getFieldProps("res_guests")}
        />
        {
          <div className="form_error" data-testid="res_guests_error">
            {formik.touched.res_guests && formik.errors.res_guests}
          </div>
        }
        <label htmlFor="res_occasion">Occasion</label>
        <select
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
          <div className="form_error" data-testid="res_occasion_error">
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
          <div className="form_error" data-testid="res_preference_error">
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
          <div className="form_error" data-testid="res_name_error">
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
          <div className="form_error" data-testid="res_email_error">
            {formik.touched.res_email && formik.errors.res_email}
          </div>
        }
        <div className="form_button_container">
          <Button
            id="submit"
            data-testid="submit"
            text="Confirm"
            disabled={!(formik.dirty && formik.isValid)}
            tabIndex={0}
            onClick={(e) => {
              submitForm(e, formik.values);
              formik.handleSubmit();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                submitForm(e, formik.values);
                formik.handleSubmit();
              }
            }}
            type="submit"
            aria-label="On Click"
          />
          {/* <Button
            text="log"
            onClick={(e) => {
              e.preventDefault();
              console.log(formik.values);
              console.log(document.getElementById("submit"));
              console.log(
                document.getElementById("submit").getAttribute("disabled"),
              );
            }}
          /> */}
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
