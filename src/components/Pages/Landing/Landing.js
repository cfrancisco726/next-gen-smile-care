import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <section className="welcome">
          <h1>Welcome to NextGenSmiles Dental</h1>
          <h2>
            Contrary to popular belief, Lorem Ipsum is not simply over 2000
          </h2>
          <Link to="/appointment">
            <button className="appointment-button" type="button">
              Request an appointment
            </button>
          </Link>
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
      </div>
    );
  }
}

export default Landing;
