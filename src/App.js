import React from 'react';

import IncomeExpense from './component/IncomeExpense';
import TransactionList from './component/TransactionList';
import TransactionForm from './component/TransactionForm';
import Balence from './component/Balence';
import GlobalProvider from './context/GlobalState';

export default function App() {
  return (
    <>
      <GlobalProvider>
        <div className="container mt-4">
          <h4 className="text-center mb-2">Expense Tracker </h4>
          <p className="text-center">Context Api with Create this app ... </p>
          <Balence />
          <div className="row">
            <IncomeExpense />
            <TransactionList />
            <TransactionForm />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}
