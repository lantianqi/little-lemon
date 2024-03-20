import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Main from "./Main";
import { MemoryRouter } from "react-router-dom";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test("Test initializeTimes", () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} />
        </MemoryRouter>
    );
    const timesSelect = screen.getByLabelText("Choose time");
    availableTimes.map((t) => {
        console.log("Testing following time is in the select: ", t)
        const timeOption = screen.getByRole("option", { name: t });
        expect(timesSelect).toContainElement(timeOption);
    })
});

test("Test updateTimes", () => {
    render(<BookingForm availableTimes={availableTimes} />);
    const date_input = screen.getByLabelText("Choose date");
    fireEvent.change(date_input, {target: {value: '2024-12-10'}});
    expect(date_input.getAttribute('value')).toEqual('2024-12-10');
});