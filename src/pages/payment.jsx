import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/payment-details.css";

const securityIcons = [
  {
    icon: "ri-lock-line",
    label: "Secure Connection",
  },
  {
    icon: "ri-shield-check-line",
    label: "Encrypted Data",
  },
  // Add more security icons as needed
];

const PaymentDetails = () => {
  const [expiringDate, setExpiringDate] = useState(null);

  const handleDateChange = (date) => {
    setExpiringDate(date);
  };

  const handlePayment = () => {
    // Simulate a successful payment
    // You can replace this with your actual payment processing logic
    setTimeout(() => {
      // Show an alert when the payment is successful
      alert("Payment Successful! Thank you for your payment.");
    }, 2000); // Display success message after 2 seconds (simulating payment processing)
  };

  return (
    <Helmet title="Payment Details">
      <CommonSection title="Payment Details" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Payment Information</h6>

              <Form>
                <FormGroup className="payment__form">
                  <Input placeholder="Credit Card Number" type="text" />
                </FormGroup>
                <FormGroup className="payment__form">
                  <DatePicker
                    placeholderText="Expiring Month/Year"
                    selected={expiringDate}
                    onChange={handleDateChange}
                    showMonthYearPicker
                  />
                </FormGroup>
                <FormGroup className="payment__form">
                  <Input placeholder="CCV Code" type="text" />
                </FormGroup>
                <button
                  className="payment__btn"
                  type="button"
                  onClick={handlePayment}
                >
                  Upgrade
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="payment__info">
                <h6 className="fw-bold">Payment Security</h6>
                <div className="security__icons">
                  {securityIcons.map((item, index) => (
                    <div key={index} className="security__icon">
                      <i className={item.icon}></i>
                      <p>{item.label}</p>
                    </div>
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

export default PaymentDetails;
