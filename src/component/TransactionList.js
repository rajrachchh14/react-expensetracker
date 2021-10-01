// 4 th
import React, { useContext } from 'react';
import { GlobalState } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TransactionList() {
  const context = useContext(GlobalState);
  console.log(context);

  return (
    <>
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
    </>
  );
}
