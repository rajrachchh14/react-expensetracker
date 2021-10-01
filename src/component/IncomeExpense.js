import React from 'react';

export default function IncomeExpense() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-2 mb-2">
        <div className="card income">
          <div className="card-body">
            <h5 className="card-title text-success">Income</h5>
            <h6 className="card-subtitle mb-2 text-muted">$100</h6>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-2 mb-2">
        <div className="card expense">
          <div className="card-body">
            <h5 className="card-title text-danger">Expense</h5>
            <h6 className="card-subtitle mb-2 text-muted">$100</h6>
          </div>
        </div>
      </div>
    </>
  );
}
