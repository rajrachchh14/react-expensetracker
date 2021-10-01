import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import IncomeExpense from './component/IncomeExpense';

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <h4 className="text-center mb-4">Expense Tracker </h4>
        <div className="row">
          <IncomeExpense />

          <div class="col-12 col-md-12 col-lg-4">
            <div className="card bd-callout-danger mb-1">
              <div className="card-body">
                $100
                <button className="btn btn-sm text-danger float-end">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>

            <div className="card bd-callout-success mb-2">
              <div className="card-body">
                $100
                <button className="btn btn-sm text-danger float-end">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-2">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Title" />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
