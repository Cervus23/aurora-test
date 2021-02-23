import React from 'react';
import './style.scss';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <p className="auth-text">
          New arrivals. Exclusive previews. First access to sales. Sign up to
          stay in the know.
        </p>
        <div className="auth">
          <input
            className="auth-email"
            type="email"
            placeholder="Your email address"
          />
          <button className="auth-btn">register</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
