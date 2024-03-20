import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

// test("renders learn react link", () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test(("test header is in the app"), () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
});