import React from 'react';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';
import Auth from '../../components/Auth';
import Cart from '../../components/Cart';
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
          <Auth />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
