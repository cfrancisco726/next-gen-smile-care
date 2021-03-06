import React from "react";
import "./Services.css";

const Services = props => {
  return (
    <div className="services-pg-container">
      <section className="services-pg-header">
        <div className="services-pg-header-txt">
          <h1>
            <span>DENTAL CARE</span>
            <br />
            <span>WITH COMPASSION</span>
          </h1>
        </div>
      </section>
      <section className="our-services-container">
        <div className="services-title">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="services-row">
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/general_dentistry.svg")}
                alt="general_dentistry"
              />
              <h2>General Dentistry</h2>
            </div>
            <div className="services-text">
              <p>
                General dentistry considers the overall dental health of a
                patient. A general dentist works to evaluate, diagnose and treat
                disorders of the gums and teeth while working to maintain oral
                health through regular cleanings and dental screenings. Some
                general dentists also work with a specialist to provide more
                advanced treatment options
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/cosmetic.svg")}
                alt="cosmetic"
              />
              <h2>Cosmetic Dentistry</h2>
            </div>
            <div className="services-text">
              <p>
                For dental treatment that goes beyond dental health to improve
                the appearance of the teeth and gums. Cosmetic dental care
                includes access to dental implants, teeth bleaching and teeth
                straightening options. Boost your self-esteem while improving
                your smile
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/pediatrics.svg")}
                alt="pediatrics"
              />
              <h2>Pediatric Dentistry</h2>
            </div>

            <div className="services-text">
              <p>
                Good oral health should start at a young age. Our Pediatric
                dentistry department is dedicated to ensuring that youthful
                patients have a comfortable, positive dental experience so they
                can grow up with the confidence that comes from healthy teeth
                and a glowing smile
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/dental_implant.svg")}
                alt="dental_implant"
              />
              <h2>Dental Implants</h2>
            </div>
            <div className="services-text">
              <p>
                One of many restorative dental procedures, dental implants are
                artificial teeth that are implanted into the jaw bone to provide
                a supportive structure that replaces lost or chipped teeth so
                that you can offer the world a confident smile again
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/oral_surgery.svg")}
                alt="oral_surgery"
              />
              <h2>Oral Surgery</h2>
            </div>
            <div className="services-text">
              <p>
                Sometimes to maintain dental health, surgical methods must be
                employed. Oral surgeons treat patients who have experienced
                mouth trauma or infections to restore the proper function and
                look of their teeth. They also perform wisdom teeth extractions
                and root canals to maintain dental health.
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/periodontics.svg")}
                alt="periodontics"
              />
              <h2>Periodontics</h2>
            </div>
            <div className="services-text">
              <p>
                Periodontists focus on periodontal treatments to improve oral
                health. From installing dental implants to working with the
                bones and soft tissue of the mouth, these specialists keep the
                supporting structures in working order.
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/cleaning.svg")}
                alt="cleaning"
              />
              <h2>Cleaning & Whitening</h2>
            </div>
            <div className="services-text">
              <p>
                We provide traditional teeth cleaning and dental bleaching.
                Teeth whitening is a painless cosmetic dental procedure that
                takes only minutes in the office and will leave you with bright,
                radiant teeth so you can show the world your best smile! Most
                patients only need one visit to uncover the natural beauty of
                their teeth.
              </p>
            </div>
          </div>
          <div className="services-col">
            <div className="services-header">
              <img
                src={require("../../../images/invisalign.svg")}
                alt="invisalign"
              />
              <h2>Invisalign</h2>
            </div>
            <div className="services-text">
              <p>
                The age of metal braces is gone. Clear aligners can help
                straighten your teeth over time, and most people won't even
                notice that you've got them. Sold under many brand names
                (Orthoclear, Invisalign, ClearCorrect), transparent braces is a
                teeth straightening option that can keep you smiling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
