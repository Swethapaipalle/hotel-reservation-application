import { render, screen } from "@testing-library/react";
import { ReservationContextProvider } from "useContext/context";
import App from "./App";

test("renders learn react link", () => {
  render(
    <ReservationContextProvider>
      <App />
    </ReservationContextProvider>
  );
  expect(
    screen.getByRole("heading", {
      name: "Hotel Reservation System",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("textbox", {
      name: "Search...",
    })
  ).toBeDefined();
  expect(
    screen.getByRole("button", {
      name: "Add Reservations",
    })
  ).toBeDefined();
});
