import React from 'react';
import { connect } from 'react-redux';
import {
  login,
  toggleSearch,
  toggleNavMenu,
  toggleHeader,
} from '../../store/actions';
import TopBar from '../../components/TopBar';
import Search from '../../components/Search';
import MainNav from '../../components/MainNav';
import './style.scss';

const Header = ({
  login,
  logged,
  username,
  showSearch,
  showNavMenu,
  activateHeader,
  toggleSearch,
  toggleNavMenu,
  toggleHeader,
  width,
}) => {
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
            <button
              className="auth-btn"
              href="/aurora-test"
              onClick={() => login()}
            >
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
      <div className={`header-menu ${activateHeader ? 'active' : ''}`}>
        <div className="header-menu-active">
          <div className="search-nav-container">
            <div className="icons">
              <div className="menu-icon" onClick={() => toggleNavMenu()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div
                className="search-icon"
                onClick={() => {
                  toggleSearch();
                  toggleHeader();
                }}
              ></div>
            </div>
          </div>
          <h2 className="logo">Aurora</h2>
          <div className="auth-cart-container" onClick={() => login()}>
            <div className="cart"></div>
            {logged ? (
              <div className="goods">{goods > 99 ? 99 : goods}</div>
            ) : null}
          </div>
        </div>
      </div>
      <MainNav width={width} active={showNavMenu} onClick={toggleNavMenu} />
      {showSearch ? (
        <Search width={width} active={showSearch} />
      ) : (
        <Search width={width} active={showSearch} />
      )}
    </div>
  );
  return width > 360 ? desctop : mobile;
};

const mapStateToProps = ({
  logged,
  username,
  showSearch,
  showNavMenu,
  activateHeader,
}) => ({
  logged,
  username,
  showSearch,
  showNavMenu,
  activateHeader,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
  toggleSearch: () => {
    dispatch(toggleSearch());
  },
  toggleNavMenu: () => {
    dispatch(toggleNavMenu());
  },
  toggleHeader: () => {
    dispatch(toggleHeader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
