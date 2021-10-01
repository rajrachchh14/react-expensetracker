// 1st
import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const inititalState = {
  transaction: [
    {
      id: 1,
      text: 'camera',
      amount: -20,
    },
    {
      id: 2,
      text: 'cash',
      amount: 50,
    },
  ],
};

// Create Context
export const GlobalContext = createContext(inititalState);

// Provider component
function GlobalState({ children }) {
  const [state, dispatch] = useReducer(AppReducer, inititalState);
  const data = { transaction: state.transaction };
  return (
    <>
      {/* {console.log(children)} data */}
      <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
