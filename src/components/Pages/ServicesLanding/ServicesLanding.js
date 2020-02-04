import React from "react";
import "./ServicesLanding.css";
import { Link } from "react-router-dom";

const services_landing = props => (
  <section className="services-landing-container">
    <div className="services-landing-title">
      <h1>OUR SERVICES</h1>
    </div>
    <div className="services-landing-row">
      <div className="services-landing-col">
        <div className="services-landing-header">
          <img src={require("../../../images/cleaning.svg")} alt="cleaning" />
          <h2>Cleaning & Whitening</h2>
        </div>
        <div className="services-landing-text">
          <p>
            We provide traditional teeth cleaning and dental bleaching. Teeth
            whitening is a painless cosmetic dental procedure that takes only
            minutes in the office and will leave you with bright, radiant teeth
            so you can show the world your best smile! Most patients only need
            one visit to uncover the natural beauty of their teeth.
          </p>
        </div>
      </div>
      <div className="services-landing-col">
        <div className="services-landing-header">
          <img
            src={require("../../../images/invisalign.svg")}
            alt="invisalign"
          />
          <h2>Dental Implants</h2>
        </div>
        <div className="services-landing-text">
          <p>
            Don't let a missing tooth leave you feeling self-conscious or
            unattractive. At Park Dental Care, we offer you the option of
            replacing chipped, broken or missing teeth with dental implants to
            restore your smile and bring back the more confident you.
          </p>
        </div>
      </div>
      <div className="services-landing-col">
        <div className="services-landing-header">
          <img src={require("../../../images/implant.svg")} alt="impant" />
          <h2>Invisalign</h2>
        </div>
        <div className="services-landing-text">
          <p>
            The age of metal braces is gone. Clear aligners can help straighten
            your teeth over time, and most people won't even notice that you've
            got them. Sold under many brand names (Orthoclear, Invisalign,
            ClearCorrect), transparent braces is a teeth straightening option
            that can keep you smiling.
          </p>
        </div>
      </div>
      <div className="services-landing-col">
        <div className="services-landing-header">
          <img src={require("../../../images/perio.svg")} alt="perio" />
          <h2>Periodontal Treatment</h2>
        </div>
        <div className="services-landing-text">
          <p>
            Our laser gum therapy removes inflamed gum tissue from periodontal
            disease and helps your gums heal naturally, avoiding more serious
            problems in the future. Treatment is more precise and in most cases
            is a painless alternative to traditional gum therapies.
          </p>
        </div>
      </div>
    </div>
    <Link to="/services">
      <button type="button">View full list of services</button>
    </Link>
  </section>
);
export default services_landing;
