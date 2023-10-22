import React from 'react';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

function Homepage() {
  return (
    <div style={centerStyle}>
      <h1>Welcome to SuperChat</h1>
      <div>
        <a className="btn btn-primary btn-lg" href="/login" role="button">
          Login
        </a>
        <span> </span>
        <a className="btn btn-secondary btn-lg" href="/register" role="button">
          Register
        </a>
      </div>
    </div>
  );
}

export default Homepage;
