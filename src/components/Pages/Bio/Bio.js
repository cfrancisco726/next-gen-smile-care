import React from "react";
import "./Bio.css";
import { Link } from "react-router-dom";

const bio = props => (
  <div className="bio-wrapper">
    <div className="bio-row">
      <div className="bio-column">
        <img src={require("../../../images/dr-jane.jpg")} alt="jane-profile" />
      </div>
      <div className="bio-column">
        <div className="bio-column-txt">
          <h1>DR. JANE JAROONNARM</h1>
          <p>
            Jane Jaroonnarm, DDS, specializes in cosmetic dentistry and general
            dentistry. She treats men, women, teens, and children at Midtown
            Dental Care in New York City with warmth and compassion. Having
            earned her DDS in 2006 from Tufts University in Medford,
            Massachusetts, Dr Jaroonnarm provides you with aesthetic
            improvements, such as Invisalign® teeth straightening, orthodontic
            braces, dental veneers, and teeth whitening. She also fills cavities
            and performs other general dental care services, including
            professional cleaning, examinations, X-rays, and bonding.
          </p>
        </div>
        <div className="bio-column-btn">
          <Link to="/services">
            <button type="button">View Full list of services</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default bio;
