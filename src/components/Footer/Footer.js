import React from "react";

import "./Footer.css";

const footer = props => (
  <footer className="footer">
    <section className="hours">
      <ul>
        <li>Office Hours</li>
        <li>Mon 9:00 am - 5:00 pm</li>
        <li>Tues 9:00 am - 5:00 pm</li>
        <li>Wed 9:00 am - 5:00 pm</li>
        <li>Thurs 9:00 am - 5:00 pm</li>
        <li>Fri 9:00 am - 5:00 pm</li>
      </ul>
    </section>
    <section className="contact">
      <ul>
        <li>Contact Us</li>
        <li> 83-48 Langdale Street</li>
        <li> New Hyde Park, NY 11040</li>
        <li>917 555-555</li>
        <li>DrJane@nextsmilecare.com</li>
      </ul>
    </section>
  </footer>
);

export default footer;
