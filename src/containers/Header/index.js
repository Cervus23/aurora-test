import React from 'react';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';

import { basket } from '../../img/index';

import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <TopBar />
      <div className="header-menu">
        <h2 className="logo">Aurora</h2>
        <div className="search-nav-container">
          <Search />
          <MainNav />
        </div>
        <div className="auth-cart-container">
          <a className="auth-link" href="/">
            Sign In | Register
          </a>
          <img src={basket} alt="basket" />
        </div>
      </div>
    </div>
  );
};

export default Header;
