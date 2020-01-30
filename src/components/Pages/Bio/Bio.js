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
        <div className="intro-bio-copy">
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
          <Link to="/services">
            <button type="button">View All Services</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default bio;
