import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/service-img/abt.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__title">About Us</h4>
              <h2 className="section__subtitle">Welcome to Bluncky's 3.0</h2>
              <p className="section__description">
              With a passion for excellence and a dedication to customer satisfaction, we provide top-notch home appliance services.
              Our mission is to ensure your home appliances run smoothly, allowing you to enjoy a convenient and comfortable living environment.
              Backed by years of industry experience, we are committed to delivering reliable and efficient solutions for all your home appliance needs.
              At our Home Appliance Services, we prioritize quality and safety, offering exceptional repairs, installations, and maintenance for your appliances.
              Experience peace of mind knowing that our skilled professionals are here to handle your home appliance requirements with utmost care and expertise.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Your satisfaction is our priority
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  Reliable solutions for appliance needs
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Prompt and efficient service guaranteed
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Trust our skilled professionals
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="about" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutSection;
