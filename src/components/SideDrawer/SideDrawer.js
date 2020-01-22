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
        <Link to="/about" onClick={props.click}>
          <li>About</li>
        </Link>
        <Link to="/services" onClick={props.click}>
          <li>services</li>
        </Link>
        <Link to="/appointment" onClick={props.click}>
          <li>Book an Appointment</li>
        </Link>
      </ul>
    </nav>
  );
};

export default sideDrawer;
