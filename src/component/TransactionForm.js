import React, { useState } from 'react';

export default function TransactionForm() {
  const [title, setTitle] = useState('');
  const [amount, setAsmount] = useState(0);
  return (
    <>
      <div class="col-12 col-md-12 col-lg-4 pb-2">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              value={amount}
              onChange={(e) => setAsmount(e.target.value)}
              placeholder="Amount"
            />
          </div>

          <button type="submit" class="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
