import React from "react";
import ServicesList from "../ServicesList/ServicesList";
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
            <ServicesList />
      </section>
    </div>
  );
};

export default Services;
