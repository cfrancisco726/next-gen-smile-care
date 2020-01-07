import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Services_Landing from "../Services_Landing/Services_Landing";
import Bio from "../Bio/Bio";
import Testimonials from "../Testimonials/Testimonials";
import Thank_You from "../Thank_You/Thank_You";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Welcome />
        <Services_Landing />
        <Bio />
        <Testimonials />
      </div>
    );
  }
}

export default Landing;
