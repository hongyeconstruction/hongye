import React from "react";
import "../styles/ServiceDetail.css";

function ServiceDetail(service) {
  return (
    <div className="bgc">
      <div
        className="service-detail"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="service-detail-icon">{service.icon}</div>
        <div className="service-detail-title">{service.name}</div>
        <div className="service-detail-description">{service.content}</div>
      </div>
      <div className="button-container">
        <button className="service-btn">View Our Projects</button>
      </div>
    </div>
  );
}

export default ServiceDetail;
