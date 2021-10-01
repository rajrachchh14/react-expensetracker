import React from 'react';

import IncomeExpense from './component/IncomeExpense';
import TransactionList from './component/TransactionList';
import TransactionForm from './component/TransactionForm';

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <h4 className="text-center mb-4">Expense Tracker </h4>
        <div className="row">
          <IncomeExpense />
          <TransactionList />
          <TransactionForm />
        </div>
      </div>
    </>
  );
}
