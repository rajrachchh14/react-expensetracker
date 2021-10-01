import React, { useState } from 'react';

export default function TransactionForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="col-12 col-md-12 col-lg-4 pb-2">
        <form>
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
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />
          </div>

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
