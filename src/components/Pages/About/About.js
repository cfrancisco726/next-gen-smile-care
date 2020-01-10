import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <section>
        <div className="about-header">
          <img
            src={require("../../../images/our_office.jpg")}
            alt="our_office"
          />
        </div>
      </section>
      <section>
        <div>
          <h1>Our Office</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
        <div>
          <img
            src={require("../../../images/our_office.jpg")}
            alt="our_office"
          />
        </div>
      </section>
      <section>
        <div>
          <h1>Our Approach</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
        <Link to="/services">
          <button type="button">View All Services</button>
        </Link>
      </section>
      <section>
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
