import React from 'react';
import './style.scss';

const Auth = () => {
  return (
    <div className="auth-modal">
      <div className="auth-modal-container">
        <h1>Sign in</h1>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button className="btn-sign-ip">Sign in</button>
      </div>
    </div>
  );
};

export default Auth;
