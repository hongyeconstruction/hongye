import React from "react";
import ServiceAccess from "./ServiceAccess";
import "../styles/Cover.css";

function Cover() {
  return (
    <div className="cover">
      <div className="corp-logo-name">
        <div className="corp-logo"></div>
        <div className="corp-name">Hongye Landscaping Construction</div>
      </div>
      <div className="corp-descrip">
        Out company specializes in outdoor landscaping, including retaining
        walls, pavings stones, hardscape lighting. With over 15 years of
        experience, we proudly serve residential and commercial clients around
        GTA.
      </div>
      <div className="corp-btn">
        <ServiceAccess />
      </div>
    </div>
  );
}

export default Cover;
