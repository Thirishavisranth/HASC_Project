import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeTechnician";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                We Are Committed To Providing Safe Home Appliance Solutions
                </h2>

                <p className="section__description">
                "At Bluncky's 3.0, we prioritize the safety of your home and family. That's why we are dedicated to providing safe and reliable home appliance solutions."
                "Your peace of mind is our top priority. With our commitment to safety, we offer trusted home appliance services that you can rely on."
                "Experience worry-free appliance maintenance and repairs with our dedicated team of professionals. We go the extra mile to ensure the safety and functionality of your home appliances."
                </p>

                <p className="section__description">
                Contact us today to schedule an appointment or learn more about how our expert team can serve you. Trust Bluncky's 3.0 for all your home appliance needs, and let us help you create a safer and more comfortable living space
                </p>

                <div className=" d-flex align-items-center gap-3 mt-6">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h6>+6382914478</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;