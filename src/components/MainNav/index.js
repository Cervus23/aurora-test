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

const MainNav = () => {
  return (
    <nav className="main-nav">
      {navItems.map((link, idx) => (
        <a className="nav-link" href="/" key={idx}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default MainNav;
