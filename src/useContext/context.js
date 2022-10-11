import React, { useReducer, createContext } from "react";
import data from './../reservations.json';
export const ReservationContext = createContext();

const initialState = {
    reservations: [{
      "stay": {
          "arrivalDate": "2021-11-18T05:00:00.000Z",
          "departureDate": "2021-11-25T05:00:00.000Z"
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
      "extras": ["extraBreakfast"],
      "payment": "cc",
      "note": "",
  }],
    noResults:false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RESERVATION":
	        return {
	            reservations: action.payload.data !== undefined ?[...action.payload.data]: [],
	            noResults:action.payload.noResults
	        };
	    case "ADD_RESERVATION":
        return {
          reservations: action.payload.data !== undefined ?[...state.reservations, action.payload.data]: [...state.reservations],
          noResults:action.payload.noResults
        };
	    case "DELETE_RESERVATION":
		    return {
			    reservations: action.payload.data !== undefined ?[...action.payload.data]: [],
			    noResults:action.payload.noResults
		    };
        default:
            throw new Error();
    }
};

export const ReservationContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ReservationContext.Provider value={[state, dispatch]}>
            {props.children}
        </ReservationContext.Provider>
    );
};
