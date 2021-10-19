import React, { createContext, useReducer } from "react";

const initialState = {
  flights: [],
  passengers: null,
  cities: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SAVE_FLIGHT_DATA":
        return {
          ...state,
          flights: action.payload,
        };
      case "SAVE_PASSENGERS":
        return {
          ...state,
          passengers: action.payload,
        };
      case "SAVE_CITIES":
        return {
          ...state,
          cities: action.payload,
        };

      case "CLEAR_DATA": {
        return {
          ...state,
          flights: [],
          passengers: null,
          cities: null,
        };
      }

      default:
        return state;
    }
  }, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
