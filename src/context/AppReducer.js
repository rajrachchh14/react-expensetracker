// 2nd
// 8th
import React from 'react';

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
    // case 'decrement':
    //   return {count: state.count - 1};
    default:
      return state;
    // throw new Error();
  }
};
