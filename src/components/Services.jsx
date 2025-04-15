import React from "react";
import ServiceDetail from "./ServiceDetail";
import services from "../services";
import "../styles/Services.css";

function createServiceDetail(service) {
  return (
    <ServiceDetail
      key={service.id}
      icon={service.icon}
      name={service.name}
      content={service.content}
      image={service.image}
    />
  );
}

function Services() {
  console.log(services);
  return (
    <div id="service" className="service">
      <div className="service-title">
        <div className="service-title-left">
          <div className="service-question">what we do</div>
          <div className="service-answer">From Design to Reality</div>
        </div>
        <div className="service-title-right">
          <div className="service-description">
            Site1 Group Landscaping & Construction takes care of every part for
            you to build your dream place. we are committed to delivering an
            impeccable experience for your next landscaping project.
          </div>
        </div>
      </div>
      <div className="service-gallery">{services.map(createServiceDetail)}</div>
    </div>
  );
}

export default Services;
