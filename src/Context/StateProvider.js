import React, { createContext, useContext, useReducer } from "react";

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull the information from the datalayer
export const useStateValue = () => useContext(StateContext);
