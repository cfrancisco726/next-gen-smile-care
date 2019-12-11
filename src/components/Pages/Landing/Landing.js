import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <section className="welcome">
          <div className="welcome-greeting">
            <h1>
              <span>NEXT</span>
              <br />
              <span>GEN</span>
              <br />
              <span>SMILES</span>
              <br />
            </h1>
            <div>
              <Link to="/appointment">
                <button className="appointment-button" type="button">
                  Request an appointment
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="services">
          <h1>Our Services</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <Link to="/services">
            <button className="services-button" type="button">
              View all services
            </button>
          </Link>
        </section>
        <section className="intro-bio">
          <h1>Dr Jane Philosophy</h1>
        </section>
        <section className="comments-carousel">
          <h1>What people are saying comments</h1>
        </section>
        <section />
      </div>
    );
  }
}

export default Landing;
