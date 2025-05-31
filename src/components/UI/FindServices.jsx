import React from "react";
import "../../styles/find-service-form.css";
//import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Location" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Appliance Type" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Service Date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="service__time"
            type="time"
            placeholder="Service Time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="repair">Repair</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </FormGroup>
        
        <FormGroup className="form__group">
        <Link to="/services" className="btn find__service-btn">
            Find Services
          </Link>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
