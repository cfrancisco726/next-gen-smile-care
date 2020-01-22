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
        <a href="/">
          <img
            src={require("../../images/next_gen_smiles_logo.svg")}
            alt="logo"
            width="328px"
            height="30px"
          />
        </a>
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
          <Link to="/appointment">
            <button type="button">Request an Appointment</button>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
