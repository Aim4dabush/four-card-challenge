import React from "react";
import "./CardTwo.css";

function CardTwo() {
  return (
    <div className="card">
      <div className="card-header" id="card-header-color-two"></div>
      <div className="card-body ms-3">
        <div className="card-title py-2">
          <h3>Team Builder</h3>
        </div>
        <div className="card-text other-text">
          Scans our talent network to create the optimal team for your project
        </div>
        <div className="card-text d-flex justify-content-end">
          <img
            src={process.env.PUBLIC_URL + "/icon-team-builder.svg"}
            className="img-fluid"
            alt="supervisor"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
