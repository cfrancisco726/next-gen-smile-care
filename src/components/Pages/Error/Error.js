import React from "react";
import "./Error.css";

function thankYou() {
  return (
    <div className="error">
      <section className="error-header">
        <div className="error-header-txt">
          <h1>
            <span>WAITING TO MEET</span>
            <br />
            <span>YOUR NEXT SMILE</span>
          </h1>
        </div>
      </section>
      <section className="error-res">
        <div>
          <h2>Error. Please contact via email DrJane@nextsmilecare.com .</h2>
        </div>
      </section>
    </div>
  );
}

export default thankYou;
