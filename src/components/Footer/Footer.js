import React from "react";

import "./Footer.css";

const footer = props => (
  <footer className="footer-container">
    <div className="hours">
      <ul>
        <li>Office Hours</li>
        <li>Mon 9:00 am - 5:00 pm</li>
        <li>Tues 9:00 am - 5:00 pm</li>
        <li>Wed 9:00 am - 5:00 pm</li>
        <li>Thurs 9:00 am - 5:00 pm</li>
        <li>Fri 9:00 am - 5:00 pm</li>
      </ul>
    </div>
    <div className="contact">
      <ul>
        <li>Contact Us</li>
        <li> 83-48 Langdale Street</li>
        <li> New Hyde Park, NY 11040</li>
        <li>917 555-555</li>
        <li>DrJane@nextsmilecare.com</li>
      </ul>
    </div>
    <div className="gmap">
      <iframe
        width="400"
        height="450"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCYDGXocQ5GcIP6P1Bd9-4GNuFyZUAuZpc
    &center=40.7396209, -73.7009663&zoom=20&maptype=satellite "
        allowFullScreen
      />
    </div>
  </footer>
);

export default footer;