import React from 'react';

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <h3 className="text-center mb-4">Expense Tracker </h3>
        <div className="row row-cols-2 row-cols-lg-3">
          <div className="col-4">
            <h3 className="text-center mb-4">My Bal $200.00 </h3>
          </div>
          <div class="col-4">
            <h3 className="text-center">History </h3>
          </div>
          <div class="col-4">
            <h3 className="text-center">My 4 </h3>
          </div>
          <div class="col-4 col-lg-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Income</h5>
                <h6 className="card-subtitle mb-2 text-muted">$100</h6>
              </div>
            </div>
          </div>
          <div class="col-4 col-lg-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expense</h5>
                <h6 className="card-subtitle mb-2 text-muted">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card bd-callout-danger">
              <div className="card-body ">
                <h6 className="card-subtitle ">$100</h6>
              </div>
            </div>

            <div className="card bd-callout-success">
              <div className="card-body ">
                <h6 className="card-subtitle ">$100</h6>
              </div>
            </div>
          </div>
          <div class="col-4 col-lg-2">Column</div>
          <div class="col-4 col-lg-2">Column</div>
          <div class="col-4 col-lg-2">Column</div>
        </div>
      </div>
    </>
  );
}
