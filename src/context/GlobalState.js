// 1st
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const inititalState = {
  transaction: [
    {
      id: 1,
      text: 'camera',
      amount: 20,
    },
    {
      id: 2,
      text: 'cash',
      amount: 50,
    },
    {
      id: 3,
      text: 'mobile',
      amount: -20,
    },
    {
      id: 4,
      text: 'bank',
      amount: 70,
    },
  ],
};

// Create Context
// Store The List
const GlobalContext = createContext(inititalState);

// Provider component
// For Provide Access Is Global Any One Can Use This Data  like This list
function GlobalState({ children }) {
  const [state, dispatch] = useReducer(AppReducer, inititalState);

  //Action 6th
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      playload: id,
    });
  }

  // Add
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      playload: transaction,
    });
  }

  const data = {
    transaction: state.transaction,
    deleteTransaction,
    addTransaction,
  }; // 7th
  return (
    <>
      {/* {console.log(children)} data */}
      <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
export { GlobalContext };
