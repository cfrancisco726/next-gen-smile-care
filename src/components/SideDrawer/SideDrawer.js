import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/services">
          <li>services</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/appointment">
          <li>Book an Appointment</li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
