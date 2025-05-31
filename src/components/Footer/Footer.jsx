import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/services",
    display: "Service Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegPage = location.pathname === "/register";
  const isTechReg = location.pathname === "/tech";
  const isProfilePage = location.pathname === "/profile";
  const isUserData = location.pathname === "/edit";
  const isDash = location.pathname === "/td";
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <i class="ri-tools-fill"></i>
                  <span>
                    Bluncky's Home Appliance  <br /> Service Center
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Your Trusted Center for Reliable Home Appliance Solutions - Bluncky's 3.0.
            Delivering Safety and Performance - Bluncky's 3.0: Your Home Appliance Experts.
            Experience Peace of Mind with Our Safe and Efficient Home Appliance Services - Bluncky's 3.0.
            Creating Safer Homes with Top-Quality Appliance Solutions - Bluncky's 3.0.
            Quality, Safety, and Excellence in Home Appliance Services - Bluncky's 3.0.
            Trust Bluncky's 3.0 for Superior Home Appliance Solutions Backed by Expertise and Reliability.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            {!isLoginPage && !isRegPage && !isTechReg && !isUserData && !isDash &&  !isProfilePage &&( // Only render the links if not on the login page
              <div className="mb-4">
                <h5 className="footer__link-title">Links</h5>
                <ListGroup>
                  {quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            )}
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">621105 Rockfort, Trichy, Tamil Nadu</p>
              <p className="office__info">Phone: +6382914478</p>

              <p className="office__info">Email: visra777@gmail.com</p>

              <p className="office__info">Service Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Trisha Visranthi. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
