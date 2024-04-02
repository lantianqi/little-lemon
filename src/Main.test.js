import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Main, { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "./api";

const testDate = "2024-12-10";
const testDate1 = "2024-12-20";
const state = [];
const initState = fetchAPI(new Date());
const updatedState = fetchAPI(new Date(testDate1));
console.log(initState);
console.log(updatedState);

test("Test initializeTimes", () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
  expect(initializeTimes()).toEqual(initState);
});

test("Test updateTimes", () => {
  expect(initializeTimes()).toEqual(initState);
  expect(updateTimes(state, { type: "UPDATE_TIMES", date: testDate1 })).toEqual(
    updatedState,
  );
});
