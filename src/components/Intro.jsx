import React from "react";
import "../styles/intro.css";

function Intro() {
  return (
    <div id="aboutus" className="intro">
      <div className="intro-title">
        <div className="intro-title-question">Who We Are</div>
        <div className="intro-title-answer">
          Professional Landscaping design and construction company in GTA​
        </div>
      </div>

      <div className="intro-photo"></div>
      <div className="intro-para-one"></div>
      <div className="intro-para-two">
        <p>
          HongYe Landscaping Construction provides services by professional team
          with company and insurance and WSIB.
        </p>
        <p>
          Starting from the design, the selection of the material, construction
          process and warranty services, we will guide you step by step so you
          can make the right decision.
        </p>
      </div>
      <div className="intro-experience">
        <div className="intro-experience-title">15+ years in landscaping</div>
        <div className="inrto-benefit-one">Customer satisfication</div>
        <div className="intro-benefit-two">Professional</div>
      </div>
    </div>
  );
}

export default Intro;
