import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const testimonials = props => (
  <section className="comments-carousel">
    <h1>TESTIMONIALS</h1>
    <Carousel>
      <Carousel.Item>
        <img
          src={require("../../../images/carousel_bg.jpg")}
          alt="slide-1"
          width={500}
          height={200}
        />
        <Carousel.Caption>
          <div className="comments-carousel-caption">
            <p>
              She was very pleasant and very light with her hands. She explained
              preventative care and the overall health of my teeth and gums.
              Great visit all things considered.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/carousel_bg.jpg")}
          alt="slide-2"
          width={500}
          height={200}
        />

        <Carousel.Caption>
          <p>
            Dr. Jane is the best! I went in for a cleaning and cavity fillings.
            The whole process was completely painless and so relaxing I almost
            fell asleep. As someone who's terrified of going to the dentist, I
            was really surprised how pleasant the experience was.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/carousel_bg.jpg")}
          alt="slide-3"
          width={500}
          height={200}
        />
        <Carousel.Caption>
          <p>
            Very nice and professional. I told her I was having tooth pain, and
            she was very thorough with examining my mouth, and talking about
            possible causes and treatments, small and big. Any small discomfort
            I experienced during my cleaning she immediately asked me about and
            examined. I highly recommend.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../../images/carousel_bg.jpg")}
          alt="jane-profile"
          width={500}
          height={200}
        />
        <Carousel.Caption>
          <p>
            Dr. Jane was amazing, and the best dentist I have had in a while.
            She was thorough in my consultation and took time to explain and
            teach things to me. Getting cavities filled is usually an extremely
            painful process for me, but she made it as smooth as possible. I
            will be seeing her again, and definitely recommend.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default testimonials;
