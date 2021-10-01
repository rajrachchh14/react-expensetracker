import React, { useState, useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

/*
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function TransactionForm() {
  const [title, setTitle] = useState('ok');
  const [amount, setAmount] = useState(10);
  const { addTransaction } = useContext(GlobalContext); // List all Data

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('a');
    const NewTransaction = {
      id: Math.floor(Math.random() * 10 * 1000000),
      title,
      amount,
    };
    // console.log(NewTransaction.id);
    addTransaction(NewTransaction);
  };

  return (
    <>
      <div className="col-12 col-md-12 col-lg-4 pb-2">
        <div className="text-center">
          <h3>Form</h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
*/
