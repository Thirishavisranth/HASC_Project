import React, { useState } from "react";
import FormInput from "./Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reg = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobileNumber",
      type: "text",
      placeholder: "mobileNumber",
      errorMessage: "The number should be 0-9!",
      label: "mobileNumber",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: values.username,
      email: values.email,
      mobileNumber: values.mobileNumber,
      password: values.password,
    };

    // Make a POST request to the backend endpoint using Axios
    axios.post("http://localhost:8081/auth/register", userData)
      .then((response) => {
        console.log("Registration successful!");
        navigate("/profile"); // Redirect to home page after successful registration
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const onChange = (e) => {
    // Update the state with the form input values as the user types

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      //backgroundImage: "https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png",
      backgroundColor: "#000d6b",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      marginTop: "2%",
    }}>
      <form style={{
        background: "linear-gradient(to bottom right, #faf9f8, #faf9f8)",
        padding: "0px 60px",
        borderRadius: "50px",
      }} onSubmit={handleSubmit}>
        <h1 style={{
          color: "rgb(77, 1, 77)",
          textAlign: "center",
        }}>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button style={{
          width: "100%",
          height: "50px",
          padding: "10px",
          border: "none",
          backgroundColor: "darkblue",
          color: "white",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "15px",
          marginBottom: "30px",
          marginRight: "2px",
          marginLeft: "0px",
        }}>Submit</button>
      </form>
    </div>
  );
};

export default Reg;
