import React, { useReducer, createContext } from "react";
import data from './../reservations.json';
export const ReservationContext = createContext();

const initialState = {
    reservations: [],
    noResults:true
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
