import React from "react";
import "./Bio.css";
import { Link } from "react-router-dom";

const bio = props => (
  <section className="intro-bio">
    <div className="intro-bio-row">
      <div classsName="intro-bio-column">
        <img src={require("../../../images/dr-jane.jpg")} alt="jane-profile" />
      </div>
      <div className="intro-bio-column">
        <div className=".intro-bio-copy">
          <h1>DR. JANE JAROONNARM</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <Link to="/services">
          <button type="button">View All Services</button>
        </Link>
      </div>
    </div>
  </section>
);

export default bio;
