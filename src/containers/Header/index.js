import React from 'react';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <TopBar />
      <div className="header-menu">
        <div className="header-menu-active">
          <h2 className="logo">Aurora</h2>
          <div className="search-nav-container">
            <Search />
            <MainNav />
          </div>
          <div className="auth-cart-container">
            <a className="auth-link" href="/">
              Sign In | Register
            </a>
            <div className="cart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
