import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <div className="about-header-txt">
          <h1>
            <span>SCIENCE-BASED</span>
            <br />
            <span>EXPERTISE</span>
          </h1>
        </div>
      </section>
      <section className="our-office-row">
        <div className="our-office-col">
          <div className="our-office-copy">
            <h1>OUR OFFICE</h1>
            <p>
              We strive to provide our patients with access to the newest in
              cosmetic dentistry while providing top quality restorative and
              maintenance service all in a warm and cozy environment. We will
              treat each patient in a kind, honest and professional manner. We
              will strive to provide top-rated dental treatment options at an
              affordable cost. We will maintain moral and ethical ideals and
              serve our customers with the highest possible medical standards.
            </p>
          </div>
        </div>
        <div className="our-office-col">
          <div className="our-office-img">
            <img
              src={require("../../../images/our_office.jpg")}
              alt="our_office"
            />
          </div>
        </div>
      </section>
      <section className="about-approach">
        <div className="about-approach-copy">
          <h1>OUR APPROACH</h1>
          <p>
            Dr. Jaroonnarm loves sharing her knowledge of good oral health
            practices with all of her patients. By teaching them preventive care
            and building a long-term, trusting relationship, she helps her
            patients reach their aesthetic and functional dental goals. Her
            patients praise her for her gentle touch, knowledge of dental
            services, and soothing manner. She can relax her patients, inspiring
            confidence even when they are undergoing complex and potentially
            uncomfortable procedures, such as root canals.
          </p>
        </div>
        <div className="about-approach-btn">
          <Link to="/services">
            <button type="button">View full list of services</button>
          </Link>
        </div>
      </section>
      <section className="about-quote">
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </p>
          <p>------------</p>
          <p>Dr. Jane Jaroonarm</p>
        </div>
      </section>
    </div>
  );
}

export default About;
