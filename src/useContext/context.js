import React, { useReducer, createContext } from "react";
import data from './../reservations.json';
export const ReservationContext = createContext();

const initialState = {
    reservations: [],
    noResults:true
};

const reducer = (state, action) => {
    console.log("state", state)
    console.log("action", action)

    switch (action.type) {
        case "ADD_RESERVATION":
            return {
                reservations: action.payload.data !== undefined ?[...action.payload.data]: [],
                noResults:action.payload.noResults
            };
        case "DEL_RESERVATION":
            return {
                reservations: state.reservations.filter(
                    contact => contact.id !== action.payload
                )
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