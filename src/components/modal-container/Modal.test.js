import React, { useContext } from 'react';
import { render, screen} from '@testing-library/react';
import Modal from './Modal';
import {
    ReservationContextProvider,
  } from "../../useContext/context";
  
test('Render Modal', () => {
  const open= true;
  const setOpen=true;
  const currentReservationData= {
    "stay": {
      "arrivalDate": "2021-11-18T05:00:00.000Z",
      "departureDate": "2021-11-25T05:00:00.000Z"
    },
    "room": {
      "roomSize": "business-suite",
      "roomQuantity": 3
    },
    "firstName": "IDM",
    "lastName": "ENG",
    "email": "idm.test@idm.com",
    "phone": "9999999999",
    "addressStreet": {
      "streetName": "IDM Street",
      "streetNumber": "1234"
    },
    "addressLocation": {
      "zipCode": "123456",
      "state": "Arizona",
      "city": "OAKVILLE"
    },
    "extras": [
      "extraBreakfast",
      "extraTV",
      "extraWiFi",
      "extraParking",
      "extraBalcony"
    ],
    "payment": "cc",
    "note": "idm lab test",
    "tags": [
      "hotel",
      "booking",
      "labtest"
    ],
    "reminder": true,
    "newsletter": true,
    "confirm": false
  }
  const view=true;

  render(
      <ReservationContextProvider>
      <Modal open={open} setOpen={setOpen} currentReservationData={currentReservationData} view={view}/>
    </ReservationContextProvider>

      );
      expect(screen.getByText("Date of arrival")).toBeDefined();
    });