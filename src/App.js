import React from 'react';

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h3 className="text-center mb-4">Expense Tracker </h3>
          <div className="col col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">Column</div>
          <div className="col col-lg-4">Column</div>
        </div>
      </div>
    </>
  );
}
