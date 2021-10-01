// 1
import React, { createContext, useReducer } from 'react';

const inititalState = {
  transaction: [
    {
      id: 1,
      text: 'camera',
      amount: -20,
    },
    {
      id: 1,
      text: 'cash',
      amount: 50,
    },
  ],
};

// Create Context
export const GlobalContext = createContext(inititalState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, inititalState);

  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
};
