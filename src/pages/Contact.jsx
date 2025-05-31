import React, { useState } from "react";
import axios from "axios"; // Make sure you have Axios imported
import { connect } from "react-redux";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { sendMessage } from "./redux/action"; // Make sure this action is correctly defined
import { NavLink } from "react-router-dom";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = ({ sendMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:2020/api/v2/add", formData); // Replace with the correct URL for your backend API endpoint
      // Handle the response if needed
      console.log(response.data);

      // Dispatch the action with the response data (if using Redux)
      sendMessage(response.data);

      // You can also reset the form here if needed
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error sending the message:", error);
    }
  };

  

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  <NavLink to="/home" className="no-underline">Send Message</NavLink>
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  621 Rock Fort, Trichy, Tamil Nadu
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+6382914478</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    visra777@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                     <a href="https://www.linkedin.com/in/thirisha-visranthi-588705258/" target="_blank"><i className={item.icon}></i></a> 
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// Ensure that your Redux action is correctly defined
const mapDispatchToProps = (dispatch) => ({
  sendMessage: (formData) => dispatch(sendMessage(formData)),
});

export default connect(null, mapDispatchToProps)(Contact);



















// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import { NavLink } from "react-router-dom"; 
// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" type="email" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                   ></textarea>
//                 </FormGroup>

//                 <button className="contact__btn" type="submit">
//                 <NavLink to="/home" className="no-underline">Send Message</NavLink>
//                 </button>
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   621 Rock Fort, Trichy, Tamil Nadu
//                 </p>
//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+6382914478</p>
//                 </div>

//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">visra777@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className=" d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i class={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;
