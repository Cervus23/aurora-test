import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';
import './style.scss';

const Header = ({ login, logged, username, width }) => {
  let goods = 100;

  const desctop = (
    <div className="header">
      <TopBar />
      <div className="header-menu">
        <div className="header-menu-active">
          <h2 className="logo">Aurora</h2>
          <div className="search-nav-container">
            <Search width={width} />
            <MainNav width={width} />
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

  const mobile = (
    <div className="header">
      <div className="header-menu">
        <div className="header-menu-active">
          <div className="search-nav-container">
            {/* <MainNav width={width} /> */}
            <div className="burger-menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="search-icon"></div>
            {/* <Search width={width} /> */}
          </div>
          <h2 className="logo">Aurora</h2>
          <div className="auth-cart-container">
            <div className="cart"></div>
            {logged ? (
              <div className="goods">{goods > 99 ? 99 : goods}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  return width > 360 ? desctop : mobile;
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
