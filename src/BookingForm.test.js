import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Main from "./Main";
import { MemoryRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";

describe("", () => {
    // const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const availableTimes = fetchAPI(new Date("2024-12-10"));
    const dispatchOnDateChange = jest.fn();
    const submitForm = jest.fn();

    test("Renders the BookingForm heading", () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    });

    test("Test initializeTimes", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                    submitForm={submitForm} />
            </MemoryRouter>
        );
        const timesSelect = screen.getByLabelText("Choose time");
        const timesOptions = await screen.findAllByTestId("booking_time_option");
        expect(timesSelect).toBeInTheDocument();
        expect((timesOptions).length).toBeGreaterThan(0);
    });

    test("Test updateTimes", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                    submitForm={submitForm} />
            </MemoryRouter>
        );
        const dateInput = screen.getByLabelText("Choose date");
        fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
        const timesOptions = await screen.findAllByTestId("booking_time_option");
        const timesOptionsValues = timesOptions.map((t) => {return t.value});
        expect(dateInput.getAttribute('value')).toEqual('2024-12-10');
        expect(timesOptionsValues).toEqual([
            "17:00", "17:30", "18:30", "19:00", "20:00", "20:30", "21:00", "23:00"
        ])
    });

})
