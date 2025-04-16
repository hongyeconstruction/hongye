import React from "react";
import ProfessionDetail from "./ProfessionDetail.jsx";
import professions from "../professions.js";
import "../styles/Profession.css";

function createProfession(profession) {
  return (
    <ProfessionDetail
      key={profession.id}
      icon={profession.icon}
      title={profession.title}
      description={profession.description}
    />
  );
}

function Profession() {
  return (
    <div className="profession">
      <div className="profession-title">
        <div className="profession-title-question">Why Choice Us</div>
        <div className="profession-title-answer">
          Expect to be 100% satisfied, always.
        </div>
      </div>
      <div className="profession-bottom">
        <div className="profession-photo"></div>
        <div className="profession-card">
          {professions.map(createProfession)}
        </div>
      </div>
    </div>
  );
}

export default Profession;
