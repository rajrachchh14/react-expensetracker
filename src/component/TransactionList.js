// 4 th
// 9 th
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TransactionList() {
  const context = useContext(GlobalContext); // Data Receive  ??
  const { transaction } = useContext(GlobalContext); // Destrure Data
  const { deleteTransaction } = useContext(GlobalContext); // Destrure Data
  // console.log(deleteTransaction);

  return (
    <>
      <div className="col-12 col-md-12 col-lg-4">
        <div className="text-center">
          <h3>List</h3>
        </div>
        {transaction.map((item) => (
          <div
            key={item.id}
            className={`card bd-callout-${
              item.amount < 0 ? 'danger' : 'success'
            } mb-1`}
          >
            <div className="card-body">
              <span>
                {item.amount < 0 ? '-' : '+'}
                {Math.abs(item.amount)}
              </span>

              <span className="text-primary">
                ( {item.title.toUpperCase()} )
              </span>
              <button
                className="btn btn-sm text-danger float-end"
                onClick={() => deleteTransaction(item.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
