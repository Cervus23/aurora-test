import React from 'react';
import { pinPoint } from '../../img/index';
import './style.scss';

const TopBar = () => {
  return (
    <div className="top-bar">
      <h4 className="top-bar-title">We deliver Worldwide</h4>
      <div className="location">
        <img className="pin-point" src={pinPoint} alt="pin"></img>
        <p className="location-text">Our stores</p>
      </div>
    </div>
  );
};

export default TopBar;
