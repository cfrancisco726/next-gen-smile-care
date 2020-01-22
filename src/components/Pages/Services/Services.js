import React from "react";
import "./Services.css";

const Services = props => {
  return (
    <div className="services-pg-container">
      <section className="services-pg-header">
        <div className="services-pg-header-txt">
          <h1>
            <span>DENTAL CARE</span>
            <br />
            <span>WITH COMPASSION</span>
          </h1>
        </div>
      </section>
      <section className="our-services-container">
        <div className="our-services-txt">
          <h1>OUR SERVICES</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
        </div>
        <div className="services-pg-row">
          <div className="services-pg-item">
            <img src={require("../../../images/cleaning.svg")} alt="cleaning" />
            <div className="services-pg-text">
              <h4>Cleaning and Whitening</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="services-pg-item">
            <img
              src={require("../../../images/invisalign.svg")}
              alt="invisalign"
            />
            <div className="services-pg-text">
              <h4>Invisalign</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="services-pg-item">
            <img src={require("../../../images/implant.svg")} alt="impant" />
            <div className="services-pg-text">
              <h4>Dental Implant</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="services-pg-item">
            <img src={require("../../../images/perio.svg")} alt="perio" />
            <div className="services-pg-text">
              <h4>Periodontal Treatment</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
