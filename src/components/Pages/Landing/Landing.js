import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import ServicesLanding from "../ServicesLanding/ServicesLanding";
import Bio from "../Bio/Bio";
import Testimonials from "../Testimonials/Testimonials";
import ThankYou from "../ThankYou/ThankYou";


class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Welcome />
        <ServicesLanding />
        <Bio />
        <Testimonials />
      </div>
    );
  }
}

export default Landing;
