import React from "react";
import "./CardOne.css";

function CardOne() {
  return (
    <div className="card">
      <div className="card-header" id="card-header-color-one"></div>
      <div className="card-body ms-3">
        <div className="card-title py-2">
          <h3>Supervisor</h3>
        </div>
        <div className="card-text other-text">
          Monitors activity to identify project roadblocks
        </div>
        <div className="card-text d-flex justify-content-end">
          <img
            src={process.env.PUBLIC_URL + "/icon-supervisor.svg"}
            className="img-fluid"
            alt="supervisor"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
