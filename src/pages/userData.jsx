import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserData = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get(`http://localhost:8183/api/v4/user/get/${localStorage.getItem('email')}`)
      .then((response) => {
        setUserData(response.data); // Set user data in state
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "darkblue",
      //background: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)), url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      marginTop: "2%",
    }}>
      <div style={{
        background: "linear-gradient(to bottom right, #faf9f8, #faf9f8)",
        padding: "20px",
        borderRadius: "50px",
        width: "400px",
        textAlign: "center",
      }}>
        <h1 style={{
          color: "rgb(77, 1, 77)",
          marginBottom: "20px",
        }}>User Profile</h1>
        {userData ? (
          <div>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Mobile Number: {userData.mobileNumber}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <button style={{
          width: "100%",
          height: "50px",
          padding: "10px",
          border: "none",
          backgroundColor: "rebeccapurple",
          color: "white",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "15px",
          marginBottom: "30px",
          marginRight: "2px",
          marginLeft: "0px",
        }} onClick={() => navigate("/home")}>Back to home</button>
      </div>
    </div>
  );
};

export default UserData;
