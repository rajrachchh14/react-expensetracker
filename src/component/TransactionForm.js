import React from 'react';

export default function TransactionForm() {
  return (
    <>
      <div class="col-12 col-md-12 col-lg-4 pb-2">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Title" />
          </div>
          <div class="mb-3">
            <input type="number" class="form-control" placeholder="Amount" />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
