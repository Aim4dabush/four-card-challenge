import React from "react";
import "./CardThree.css";

function CardThree() {
  return (
    <div className="card">
      <div className="card-header" id="card-header-color-three"></div>
      <div className="card-body ms-3">
        <div className="card-title py-2">
          <h3>Karma</h3>
        </div>
        <div className="card-text other-text">
          Regularly evaluates our talent to ensure quality
        </div>
        <div className="card-text d-flex justify-content-end">
          <img
            src={process.env.PUBLIC_URL + "/icon-karma.svg"}
            className="img-fluid"
            alt="supervisor"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CardThree;
