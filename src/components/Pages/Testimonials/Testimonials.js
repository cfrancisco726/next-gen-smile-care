import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const testimonials = props => (
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/dr-jane.jpg")}
          alt="jane-profile"
          width={500}
          height={200}
        />

        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/dr-jane.jpg")}
          alt="jane-profile"
          width={500}
          height={200}
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/dr-jane.jpg")}
          alt="jane-profile"
          width={500}
          height={200}
        />
        <Carousel.Caption>
          <h3>Fourt Slide</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default testimonials;
