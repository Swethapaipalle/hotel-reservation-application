import { fireEvent, render, screen } from "@testing-library/react";
import {
  ReservationContext,
  ReservationContextProvider,
} from "../../useContext/context";
import DetailPage from "./DetailPage";

const dataProp = {
  addressLocation: {
    city: "oakville",
    state: "Arizona",
    zipCode: "123456",
  },
  addressStreet: {
    streetName: "TDM Street",
    streetNumber: "1234",
  },
  email: "idm.test@idm.com",
  extras: [
    "extraBreakfast",
    "extraTV",
    "extraWiFi",
    "extraParking",
    "extraBalcony",
  ],
  firstName: "IDM",
  lastName: "ENG",
  newsletter: true,
  note: "idm lab test",
  payment: "cc",
  phone: "9999999999",
  reminder: true,
  room: {
    roomQuantity: 3,
    roomSize: "business-suite",
  },
  stay: {
    arrivalDate: "2021-11-18T05:00:00.000Z",
    departureDate: "2021-11-25T05:00:00.000Z",
  },
  tags: ["hotel", "booking", "labtest"],
};

describe("Details Page Test Suite", () => {
  test("should render component", () => {
    render(
      <ReservationContextProvider>
        <DetailPage />
      </ReservationContextProvider>
    );
    expect(screen.getByText("Date of arrival")).toBeDefined();
    expect(screen.getByText("Date of departure")).toBeDefined();
    expect(screen.getByText("Room Size")).toBeDefined();
    expect(screen.getByText("Room quantity")).toBeDefined();
    expect(screen.getByText("Add your country code first")).toBeDefined();
    expect(screen.getByText("Extras")).toBeDefined();
    expect(screen.getByText("Personal Note")).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: "Cancel",
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: "Save",
      })
    ).toBeVisible();
  });

  test("should render component with data", () => {
    render(
      <ReservationContextProvider>
        <DetailPage data={dataProp} />
      </ReservationContextProvider>
    );
    expect(screen.getByText("Date of arrival")).toBeDefined();
    expect(
      screen.getByRole("textbox", {
        name: "Date of arrival",
      }).value
    ).toEqual("11/18/2021");
    expect(screen.getByText("Date of departure")).toBeDefined();
    expect(
      screen.getByRole("textbox", {
        name: "Date of departure",
      }).value
    ).toEqual("11/25/2021");
    expect(screen.getByText("Room Size")).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: "Business-suite",
      })
    ).toBeDefined();
    expect(screen.getByText("Room quantity")).toBeDefined();
    expect(
      screen.getByRole("spinbutton", {
        name: "Room quantity",
      }).value
    ).toEqual("3");
    expect(screen.getByText("First Name")).toBeDefined();
    expect(
      screen.getByRole("textbox", {
        name: "First Name",
      }).value
    ).toEqual("IDM");
    expect(screen.getByText("Last Name")).toBeDefined();
    expect(
      screen.getByRole("textbox", {
        name: "Last Name",
      }).value
    ).toEqual("ENG");
    expect(screen.getByText("Extras")).toBeDefined();
    expect(screen.getByText("Personal Note")).toBeDefined();
    expect(
      screen.getByRole("button", {
        name: "Cancel",
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: "Save",
      })
    ).toBeVisible();
  });

  test("should render component with view prop", () => {
    render(
      <ReservationContextProvider>
        <DetailPage data={dataProp} view={true} />
      </ReservationContextProvider>
    );
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });

  test("should invoke cancel handler with cancel button clicked", () => {
    const mockFn = jest.fn();
    render(
      <ReservationContextProvider>
        <DetailPage data={dataProp} view={true} handleClose={mockFn} />
      </ReservationContextProvider>
    );
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    fireEvent.click(cancelButton);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should invoke dispatch and cancel handler with save button clicked", () => {
    const mockFn = jest.fn();
    const dispatchFn = jest.fn();
    render(
      <ReservationContext.Provider value={[{}, dispatchFn]}>
        <DetailPage data={dataProp} view={false} handleClose={mockFn} />
      </ReservationContext.Provider>
    );
    const saveButton = screen.getByRole("button", {
      name: "Save",
    });
    fireEvent.click(saveButton);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn.mock.calls[0][0].type).toEqual("ADD_RESERVATION");
    expect(dispatchFn.mock.calls[0][0].payload).not.toBeNull();
  });

  test("should invoke dispatch and cancel handler with save button clicked after entering values", () => {
    const mockFn = jest.fn();
    const dispatchFn = jest.fn();
    render(
      <ReservationContext.Provider value={[{}, dispatchFn]}>
        <DetailPage data={{}} view={false} handleClose={mockFn} />
      </ReservationContext.Provider>
    );
    const dateOfArrivalInput = screen.getByRole("textbox", {
      name: "Date of arrival",
    });
    fireEvent.change(dateOfArrivalInput, { target: { value: "11/17/2021" } });
    const dateOfDepartureInput = screen.getByRole("textbox", {
      name: "Date of departure",
    });
    fireEvent.change(dateOfDepartureInput, { target: { value: "11/24/2021" } });
    const roomQuantity = screen.getByRole("spinbutton", {
      name: "Room quantity",
    });
    fireEvent.change(roomQuantity, { target: { value: "4" } });
    const firstName = screen.getByRole("textbox", {
      name: "First Name",
    });
    fireEvent.change(firstName, { target: { value: "John" } });
    const lastName = screen.getByRole("textbox", {
      name: "Last Name",
    });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    const email = screen.getByRole("textbox", {
      name: "Email",
    });
    fireEvent.change(email, { target: { value: "abc@test.com" } });
    const phoneNo = screen.getByRole("textbox", {
      name: "Phone Number",
    });
    fireEvent.change(phoneNo, { target: { value: "9999999999" } });
    const streetName = screen.getByRole("textbox", {
      name: "Street Name",
    });
    fireEvent.change(streetName, { target: { value: "First St" } });
    const streetNo = screen.getByRole("textbox", {
      name: "Street Number",
    });
    fireEvent.change(streetNo, { target: { value: "1" } });
    const zip = screen.getByRole("textbox", {
      name: "Zip",
    });
    fireEvent.change(zip, { target: { value: "12345" } });
    const state = screen.getByRole("textbox", {
      name: "State",
    });
    fireEvent.change(state, { target: { value: "CA" } });
    const city = screen.getByRole("textbox", {
      name: "City",
    });
    fireEvent.change(city, { target: { value: "Central City" } });

    const saveButton = screen.getByRole("button", {
      name: "Save",
    });
    fireEvent.click(saveButton);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn.mock.calls[0][0].type).toEqual("ADD_RESERVATION");
    expect(dispatchFn.mock.calls[0][0].payload).not.toBeNull();
  });
});
