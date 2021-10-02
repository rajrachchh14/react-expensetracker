// 1st
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const inititalState = {
  transaction: [
    // {
    //   id: 1,
    //   title: '1',
    //   amount: 100,
    // },
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
    // console.log(id);
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  // Add
  /*
  function addTransaction(transaction) {
    // console.log(transaction);
    dispatch({
      type: 'ADD_TRANSACTION',
      playload: transaction,
    });
  }
*/

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
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
