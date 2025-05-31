// import React, { useState } from "react";
// import "./Login.css";

// import { login, logout } from "../features/userSlice";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       login({
//         name: name,
//         email: email,
//         password: password,
//         loggedIn: true,
//       })
//     );

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="login">
//       <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
//         <h1>Login here 🚪</h1>
//         <input
//           type="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           value={email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           value={password}
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="submit__btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;








import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import '../styles/login.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; 


const Login = () => {
  const [showError, setShowError] = React.useState(false);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Make the HTTP request to the backend API
      axios
        .post('http://localhost:8081/auth/login', {
          email: email,
          password: password,
        })
        .then((response) => {
          // Handle successful response, e.g., save authentication token in Redux or LocalStorage
          console.log('Login successful:', response.data);
  
          // Redirect to the home page after successful login
          navigate('/dash');
        })
        .catch((error) => {
          // Handle error response, e.g., show error message to the user
          console.error('Login failed:', error.response.data);
  
          // Show the popup message
          setShowError(true);
        });
    }
  };
     

  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  return (
    <div className='hell'>
      <div className='uth-form'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type='email'
            placeholder='Enter email id'
            id='email'
            name='email'
          />
          {errors.email && <div className='errors'>{errors.email}</div>}
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type='password'
            placeholder='Enter password'
            id='password'
            name='password'
          />
          {errors.password && <div className='errors'>{errors.password}</div>}

          {/* Do not use Link for form submission. Use a regular button. */}
          <button type='submit'>Log In</button>
        </form>
        {showError && <div className='popup-message'>Incorrect username or password!</div>}
        <Link to='/register' className='l-btn'>
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;






