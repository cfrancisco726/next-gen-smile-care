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
            <Link to="/appointment">
              <button className="appointment-button">
                Request an Appointment
              </button>
            </Link>
          </div>
        </section>

        <section className="services">
          <div>
            <h1>Our Services</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div>
            <figure>
              <img
                src={require("../../../images/cleaning.svg")}
                alt="cleaning"
                width="40px"
              />
              <figcaption>Cleaning and Whitening</figcaption>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </figure>
            <figure>
              <img
                src={require("../../../images/invisalign.svg")}
                alt="cleaning"
                width="40px"
              />
              <figcaption>Invisalign</figcaption>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </figure>
            <figure>
              <img
                src={require("../../../images/implant.svg")}
                alt="cleaning"
                width="40px"
              />
              <figcaption>Dental Implant</figcaption>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </figure>
            <figure>
              <img
                src={require("../../../images/perio.svg")}
                alt="cleaning"
                width="40px"
              />
              <figcaption>Periodontal Treatment</figcaption>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </figure>
          </div>

          <Link to="/services">
            <button className="services-button" type="button">
              View all services
            </button>
          </Link>
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
              View all services
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
