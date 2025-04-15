import React from "react";
import ServiceAccess from "./ServiceAccess";
import "../styles/Cover.css";

function Cover() {
  return (
    <div className="cover">
      <div className="corp-logo-name">
        <div className="corp-logo"></div>
        <div className="corp-name">
          Hongye Landscaping Construction & Construction
        </div>
      </div>
      <div className="corp-descrip">
        Siteone Group (Previous Leonlin Landscaping) has been serving the GTA
        community For over 16 years and empowering countless homeowner’s to
        build their ideal outdoor spaces.
      </div>
      <div className="corp-btn">
        <ServiceAccess />
      </div>
    </div>
  );
}

export default Cover;
