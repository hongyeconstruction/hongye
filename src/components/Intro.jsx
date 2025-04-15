import React from "react";
import "../styles/Intro.css";

function Intro() {
  return (
    <div id="aboutus" className="intro">
      <div className="intro-title">
        <div className="intro-title-question">Who We Are</div>
        <div className="intro-title-answer">
          Professional Landscaping design and construction company in GTA​
        </div>
      </div>
      <div className="intro-para-one">
        For over 16 years, Site1 Group Landscaping & Construction (Previous
        Leonlin Landscaping) has been serving the GTA community and empowering
        countless homeowner’s to build their ideal outdoor spaces. We understand
        landscaping is a long-lasting big investment and we take the owner’s
        satisfaction as our first priority.{" "}
      </div>
      <div className="intro-photo"></div>
      <div className="intro-para-two">
        Starting from the design, the selection of the material, construction
        process and warranty services, our professionally trained staff will
        guide you step by step so you can make the right decision. We are proud
        to deliver superior outdoor spaces that are customized to our homeowner
        needs and take pride in our craftsmanship.
      </div>
      <div className="intro-experience">
        <div className="intro-experience-title">16+ years in landscaping</div>
        <div className="inrto-benefit-one">Customer satisfication</div>
        <div className="intro-benefit-two">Professional</div>
      </div>
    </div>
  );
}

export default Intro;
