import React from "react";
import "../styles/ProfessionDetail.css";

function ProfessionDetail(profession) {
  return (
    <div className="profession-detail">
      <div className="profession-detail-logo">{profession.icon}</div>
      <div className="profession-detail-subtitle">{profession.title}</div>
      <div className="profession-detail-description">
        {profession.description}
      </div>
      <div className="strip"></div>
    </div>
  );
}

export default ProfessionDetail;
