import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
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

        <section className="services-container">
          <div className="services-title">
            <h1>OUR SERVICES</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
          </div>
          <div className="services-row">
            <div className="services-item">
              <img
                src={require("../../../images/cleaning.svg")}
                alt="cleaning"
              />
              <div className="services-copy">
                <h3>Cleaning and Whitening</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="services-item">
              <img
                src={require("../../../images/invisalign.svg")}
                alt="cleaning"
              />
              <div className="services-copy">
                <h3>Invisalign</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="services-item">
              <img
                src={require("../../../images/implant.svg")}
                alt="cleaning"
                width="40px"
              />
              <div className="services-copy">
                <h3>Dental Implant</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="services-item">
              <img
                src={require("../../../images/perio.svg")}
                alt="cleaning"
                width="40px"
              />
              <div className="services-copy">
                <h3>Periodontal Treatment</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div className="services-btn">
            <Link to="/services">
              <button className="services-btn-btn" type="button">
                View All Services
              </button>
            </Link>
          </div>
        </section>
        <section className="intro-bio">
          <img
            src={require("../../../images/dr-jane.jpg")}
            alt="jane-profile"
            width="30%"
          />
          <h1>DR. JANE JAROONNARM</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <Link to="/services">
            <button className="services-button" type="button">
              View All Services
            </button>
          </Link>
        </section>
        <section className="comments-carousel">
          <h1>What People Are Saying</h1>
        </section>
        <section />
      </div>
    );
  }
}

export default Landing;
