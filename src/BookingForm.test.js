import {
  findByLabelText,
  findByTestId,
  fireEvent,
  getByLabelText,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api";

describe("Test BookingForm", () => {
  const availableTimes = fetchAPI(new Date("2024-12-10"));
  const submitForm = jest.fn();
  const updateTimes = jest.fn();
  const dispatchOnDateChange = jest.fn();

  test("Renders the BookingForm heading", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const headingElement = screen.getByText("Hold on");
    expect(headingElement).toBeInTheDocument();
  });

  test("Test res_time input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_time_input = screen.getByLabelText("Time");
    expect(res_time_input).toHaveAttribute("id");
    expect(res_time_input).toHaveAttribute("name");
  });

  test("Test res_guests input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_guests_input = screen.getByLabelText("Number of guests");
    expect(res_guests_input).toHaveAttribute("type");
    expect(res_guests_input.getAttribute("type")).toBe("number");
    expect(res_guests_input).toHaveAttribute("id");
    expect(res_guests_input).toHaveAttribute("name");
  });

  test("Test res_occasion input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_occasion_input = screen.getByLabelText("Occasion");
    expect(res_occasion_input).toHaveAttribute("id");
    expect(res_occasion_input).toHaveAttribute("name");
  });

  test("Test res_preference input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_preference_input = screen.getByLabelText("Preference");
    expect(res_preference_input).toHaveAttribute("id");
    expect(res_preference_input).toHaveAttribute("name");
  });

  test("Test res_name input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_name_input = screen.getByLabelText("Name");
    expect(res_name_input).toHaveAttribute("type");
    expect(res_name_input.getAttribute("type")).toBe("text");
    expect(res_name_input).toHaveAttribute("id");
    expect(res_name_input).toHaveAttribute("name");
  });

  test("Test res_email input HTML attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitForm={submitForm}
      />,
    );
    const res_email_input = screen.getByLabelText("Email");
    expect(res_email_input).toHaveAttribute("type");
    expect(res_email_input.getAttribute("type")).toBe("email");
    expect(res_email_input).toHaveAttribute("id");
    expect(res_email_input).toHaveAttribute("name");
  });

  describe("Testing form validatin on valid inputs", () => {
    test("test valid inputs", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );

      const submit = await findByTestId("submit");
      expect(submit).toBeDisabled();
      expect(submit).toHaveAttribute("disabled");

      const res_date_input = await findByLabelText("Date");
      const res_date_error = await findByTestId("res_date_error");
      fireEvent.change(res_date_input, { target: { value: "2024-12-10" } });
      fireEvent.blur(res_date_input);

      const res_time_input = await findByLabelText("Time");
      const res_time_error = await findByTestId("res_time_error");
      fireEvent.change(res_time_input, {
        target: { value: availableTimes[availableTimes.length / 2] },
      });
      fireEvent.blur(res_time_input);

      const res_guests_input = await findByLabelText("Number of guests");
      const res_guests_error = await findByTestId("res_guests_error");
      fireEvent.change(res_guests_input, { target: { value: 4 } });
      fireEvent.blur(res_guests_input);

      const res_occasion_input = await findByLabelText("Occasion");
      const res_occasion_error = await findByTestId("res_occasion_error");
      fireEvent.change(res_occasion_input, { target: { value: "none" } });
      fireEvent.blur(res_occasion_input);

      const res_preference_input = await findByLabelText("Preference");
      const res_preference_error = await findByTestId("res_preference_error");
      fireEvent.change(res_preference_input, { target: { value: "none" } });
      fireEvent.blur(res_preference_input);

      const res_name_input = await findByLabelText("Name");
      const res_name_error = await findByTestId("res_name_error");
      fireEvent.change(res_name_input, { target: { value: "NN" } });
      fireEvent.blur(res_name_input);

      const res_email_input = await findByLabelText("Email");
      const res_email_error = await findByTestId("res_email_error");
      fireEvent.change(res_email_input, { target: { value: "aaa@mail.com" } });
      fireEvent.blur(res_email_input);
      await waitFor(() => {
        // expect(error).toHaveTextContent("Please provide a valid value for this field.");
        expect(res_date_error).toBeEmptyDOMElement();
        expect(res_time_error).toBeEmptyDOMElement();
        expect(res_guests_error).toBeEmptyDOMElement();
        expect(res_occasion_error).toBeEmptyDOMElement();
        expect(res_preference_error).toBeEmptyDOMElement();
        expect(res_name_error).toBeEmptyDOMElement();
        expect(res_email_error).toBeEmptyDOMElement();
        expect(submit).not.toBeDisabled();
        expect(submit).not.toHaveAttribute("disabled");
      });
    });
  });

  describe("Testing form validation on invalid inputs", () => {
    test("test empty date", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Date");
      const error = await findByTestId("res_date_error");
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a valid value for this field.",
        );
      });
    });
    test("test old date", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Date");
      const error = await findByTestId("res_date_error");
      fireEvent.change(input, { target: { value: "2022-12-10" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a date later than today.",
        );
      });
    });
    test("test empty time", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Time");
      const error = await findByTestId("res_time_error");
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a valid value for this field.",
        );
      });
    });
    test("test too small number of guests", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Number of guests");
      const error = await findByTestId("res_guests_error");
      fireEvent.input(input, { target: { value: 0 } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent("There must be at least 1 guest.");
      });
    });
    test("test too big number of guests", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Number of guests");
      const error = await findByTestId("res_guests_error");
      fireEvent.input(input, { target: { value: 11 } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent("We can only serve at most 10 guests.");
      });
    });
    test("test invalid occasion", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Occasion");
      const error = await findByTestId("res_occasion_error");
      fireEvent.change(input, { target: { value: "no_occasion" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent("Please select from the options.");
      });
    });
    test("test invalid preference", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Preference");
      const error = await findByTestId("res_preference_error");
      fireEvent.change(input, { target: { value: "no_preference" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent("Please select from the options.");
      });
    });
    test("test empty name", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Name");
      const error = await findByTestId("res_name_error");
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a valid value for this field.",
        );
      });
    });
    test("test too short name", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Name");
      const error = await findByTestId("res_name_error");
      fireEvent.input(input, { target: { value: "N" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a name that has at least 2 characters.",
        );
      });
    });
    test("test too long name", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Name");
      const error = await findByTestId("res_name_error");
      fireEvent.input(input, {
        target: {
          value: "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",
        },
      });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a name that has at most 50 characters.",
        );
      });
    });
    test("test empty email", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Email");
      const error = await findByTestId("res_email_error");
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a valid value for this field.",
        );
      });
    });
    test("test invalid email", async () => {
      const { findByLabelText, findByTestId } = render(
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitForm={submitForm}
        />,
      );
      const input = await findByLabelText("Email");
      const error = await findByTestId("res_email_error");
      fireEvent.input(input, { target: { value: "aaa.com" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(error).toHaveTextContent(
          "Please provide a valid email address.",
        );
      });
    });
  });
});
