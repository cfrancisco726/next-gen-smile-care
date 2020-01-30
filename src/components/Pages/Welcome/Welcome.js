import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const welcome = props => (
  <section className="welcome-container">
    <div className="welcome-greeting">
      <div>
        <h1>
          <span>NEXT</span>
          <br />
          <span>GEN</span>
          <br />
          <span>SMILES</span>
          <br />
        </h1>
      </div>

      <div>
        <Link to="/appointment">
          <button className="welcome-appt-btn" type="button">
            Request an Appointment
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default welcome;
