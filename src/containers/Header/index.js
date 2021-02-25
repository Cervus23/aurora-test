import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';
import './style.scss';

const Header = ({ login, logged, username }) => {
  let goods = 100;

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
            <button className="auth-btn" href="/" onClick={() => login()}>
              {logged ? `Hi, ${username}!` : 'Sign In | Register'}
            </button>
            <div className="cart"></div>
            {logged ? (
              <div className="goods">{goods > 99 ? 99 : goods}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ logged, username }) => ({
  logged,
  username,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
