import React from "react";
import "./CardFour.css";

function CardFour() {
  return (
    <div className="card">
      <div className="card-header" id="card-header-color-four"></div>
      <div className="card-body ms-3">
        <div className="card-title py-2">
          <h3>Calculator</h3>
        </div>
        <div className="card-text other-text">
          Uses data from past projects to provide better delivery estimates
        </div>
        <div className="card-text d-flex justify-content-end">
          <img
            src={process.env.PUBLIC_URL + "/icon-calculator.svg"}
            className="img-fluid"
            alt="supervisor"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CardFour;
