import React from "react";
import "./ThankYou.css";

function thankYou() {
  return (
    <div className="thank-you">
      <section className="thank-you-header">
        <div className="thank-you-header-txt">
          <h1>
            <span>WAITING TO MEET</span>
            <br />
            <span>YOUR NEXT SMILE</span>
          </h1>
        </div>
      </section>
      <section className="thank-you-reply">
        <div>
          <h2>Thank you. You will hear from us shortly.</h2>
        </div>
      </section>
    </div>
  );
}

export default thankYou;
