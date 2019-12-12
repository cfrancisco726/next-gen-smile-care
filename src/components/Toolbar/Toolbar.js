import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
            <li>Request an Appointment</li>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
