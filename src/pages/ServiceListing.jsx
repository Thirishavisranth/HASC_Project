import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ServiceItem from "../components/UI/ServiceItem";
import ServiceData from "../assets/data/repairData";

const ServiceListing = () => {
  return (
    <Helmet title="Services">
      <CommonSection title="Services Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="popularity">Popularity</option>
  </select>
              </div>
            </Col>

            {ServiceData.map((item) => (
              <ServiceItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ServiceListing;
