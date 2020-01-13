import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <div>
          <img
            src={require("../../../images/our_office.jpg")}
            alt="our_office"
          />
        </div>
      </section>
      <section className="our-office-row">
        <div className="our-office-col">
          <div className="our-office-col-copy">
            <h1>OUR OFFICE</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="our-office-col">
          <img
            src={require("../../../images/our_office.jpg")}
            alt="our_office"
          />
        </div>
      </section>
      <section className="about-approach">
        <div className="about-approach-copy">
          <h1>OUR APPROACH</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
        <div className="about-apporach-btn">
          <Link to="/services">
            <button type="button">View All Services</button>
          </Link>
        </div>
      </section>
      <section className="about-quote">
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
          <p>------------</p>
          <p>Dr. Jane Jaroonarm</p>
        </div>
      </section>
    </div>
  );
}

export default About;
