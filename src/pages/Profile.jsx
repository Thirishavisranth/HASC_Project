// src/pages/profile.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userProfile = useSelector((state) => state.userProfile);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000d6b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    marginTop: '2%',
  };

  const formStyle = {
    background: 'linear-gradient(to bottom right, #faf9f8, #faf9f8)',
    padding: '0px 60px',
    borderRadius: '50px',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h1 style={{ color: 'rgb(77, 1, 77)', textAlign: 'center' }}>
          Registered Successfully!!!
        </h1>
      </form>
    </div>
  );
};

export default Profile;
