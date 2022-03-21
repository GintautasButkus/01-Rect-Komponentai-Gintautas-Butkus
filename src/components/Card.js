import React from "react";


export default function Card({cardText, cardTime}) {
  return (
    
      <div className="col-md-4">
              <div className="card mb-4 box-shadow">
              <img src="https://st2.depositphotos.com/1813786/7041/v/950/depositphotos_70414397-stock-illustration-vintage-label-rock-and-roll.jpg" alt="Girl in a jacket" />
                <div className="card-body">
                  <p className="card-text">{cardText}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">{cardTime}</small>
                  </div>
                </div>
              </div>
    </div>
  );
}
