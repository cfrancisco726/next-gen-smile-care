import React from "react";
import "./ServicesLanding.css";
import { Link } from "react-router-dom";
import ServicesList from "../ServicesList/ServicesList";

const services_landing = props => (
  <section className="services-landing-container">
    <ServicesList />
    <Link to="/services">
      <button type="button">View All Services</button>
    </Link>
  </section>
);
export default services_landing;
