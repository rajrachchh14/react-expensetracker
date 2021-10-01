//  5th
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function IncomeExpense() {
  const { transaction } = useContext(GlobalContext); // Destrure Data Display All

  const amounts = transaction.map((dara) => dara.amount); // list all amount
  console.log(amounts);
  const income = amounts
    .filter((b) => b > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const expense =
    amounts.filter((b) => b < 0).reduce((a, b) => (a += b), 0) *
    -(1).toFixed(2);

  // console.log(income, 'f');
  return (
    <>
      <div className="col-lg-4">
        <div className="text-center">
          <h3>Data</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card income">
              <div className="card-body">
                <h5 className="card-title text-success">Income</h5>
                <h6 className="card-subtitle mb-2 text-muted">${income}</h6>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card expense">
              <div className="card-body">
                <h5 className="card-title text-danger">Expense</h5>
                <h6 className="card-subtitle mb-2 text-muted">${expense}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
