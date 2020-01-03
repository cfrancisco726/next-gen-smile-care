import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Welcome from "../Welcome/Welcome";
import Services_Landing from "../Services_Landing/Services_Landing";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Welcome />
        <Services_Landing />

        <section className="intro-bio">
          <img
            src={require("../../../images/dr-jane.jpg")}
            alt="jane-profile"
          />
          <div className="intro-bio-text">
            <h1>DR. JANE JAROONNARM</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Link to="/services">
              <button type="button">View All Services</button>
            </Link>
          </div>
        </section>
        <section className="comments-carousel">
          <h1>What People Are Saying</h1>
          <Carousel>
            <Carousel.Item>
              <img
                src={require("../../../images/dr-jane.jpg")}
                alt="jane-profile"
                width={500}
                height={200}
              />
              <Carousel.Caption>
                <div className="carousel-cap">
                  <h3>First Slide</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../../images/dr-jane.jpg")}
                alt="jane-profile"
              />
              <Carousel.Caption>
                <h3>Second Slide</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../../images/dr-jane.jpg")}
                alt="jane-profile"
              />
              <Carousel.Caption>
                <h3>Third Slide</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../../images/dr-jane.jpg")}
                alt="jane-profile"
              />
              <Carousel.Caption>
                <h3>Fourt Slide</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section />
      </div>
    );
  }
}

export default Landing;
