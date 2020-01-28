import React from "react";
import "./ServicesList.css";
import { Link } from "react-router-dom";

const services_list = props => (
  <div className="services-container">
    <div className="services-title">
      <h1>OUR SERVICES</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s.
      </p>
    </div>
    <div className="services-row">
      <div className="services-item">
        <img src={require("../../../images/cleaning.svg")} alt="cleaning" />
        <div className="services-text">
          <h4>Cleaning and Whitening</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="services-item">
        <img src={require("../../../images/invisalign.svg")} alt="invisalign" />
        <div className="services-text">
          <h4>Invisalign</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="services-item">
        <img src={require("../../../images/implant.svg")} alt="impant" />
        <div className="services-text">
          <h4>Dental Implant</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="services-item">
        <img src={require("../../../images/perio.svg")} alt="perio" />
        <div className="services-text">
          <h4>Periodontal Treatment</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default services_list;
