import React from "react";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Logout.css";
//import { selectUser } from "../features/userSlice";

const Logout = () => {
  //const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // const logout = (e) => {
  //   dispatch(logout());
  // };

  //const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(Logout());
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>User Information</h2>
        <p>Username:</p>
        <p>Email:</p>
        {/* <p>Username: {user.username}</p>
        <p>Email: {user.email}</p> */}
        {/* Display other user information as needed */}
      </div>
      {/* Additional content for the profile page */}
    </div>
  );
};

export default Logout;
