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
        <Link to="/" onClick={props.click}>
          <li>Home</li>
        </Link>
        <Link to="/about" onClick={props.click}>
          <li>About</li>
        </Link>
        <Link to="/services" onClick={props.click}>
          <li>Services</li>
        </Link>
        <Link to="/appointment" onClick={props.click}>
          <li>Request an Appointment</li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
