import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const welcome = props => (
  <section className="welcome-container">
    <div className="welcome-greeting">
        <h1>
        <span>NEXT</span>
        <br />
        <span>GEN</span>
        <br />
        <span>SMILES</span>
        <br />
      </h1>
      </div>
    <Link to="/appointment">
        <button className="welcome-appt-btn" type="button">
        Request an Appointment
      </button>
      </Link>
  </section>
);

export default welcome;
