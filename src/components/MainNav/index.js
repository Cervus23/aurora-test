import React from 'react';
import './style.scss';

const navItems = [
  "what's new",
  'women',
  'accessories',
  'kids',
  'beauty',
  'outlet',
  'stories',
];

const MainNav = ({ width, active, onClick }) => {
  const desctop = (
    <nav className="main-nav">
      {navItems.map((link, idx) => (
        <div className="nav-section" key={idx}>
          <a className="nav-link" href="/" key={idx}>
            {link}
          </a>
          {link !== 'stories' ? <div className="chevron"></div> : null}
        </div>
      ))}
    </nav>
  );

  const phone = (
    <div className="nav-container">
      <nav className="main-nav">
        <h3 className="menu-logo">Aurora</h3>
        {navItems.map((link, idx) => (
          <div className="nav-section" key={idx}>
            <a className="nav-link" href="/" key={idx}>
              {link}
            </a>
            {link !== 'stories' ? <div className="chevron"></div> : null}
          </div>
        ))}
        <div className="sign-in">Sign in | Register</div>
      </nav>
      <div
        className={`underlay ${active ? 'active' : ''}`}
        onClick={() => onClick()}
      ></div>
    </div>
  );

  return width > 360 ? desctop : phone;
};

export default MainNav;
