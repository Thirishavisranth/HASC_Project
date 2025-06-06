import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <Link to={`/services/${item.slug}`} className="service__link"></Link>
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
