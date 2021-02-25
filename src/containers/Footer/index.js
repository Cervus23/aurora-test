import React from 'react';
import { insta, twitter, snapchat, facebook, youtube } from '../../img/index';
import './style.scss';

const footerMenu = [
  {
    id: 'about',
    title: 'About Us',
    links: ['Who we are', 'Our stores', 'Customer Reviews'],
  },
  {
    id: 'categories',
    title: 'Categories',
    links: ['Women fashion', 'Accessories', 'Kids'],
  },
  {
    id: 'help',
    title: 'Help',
    links: ['Customer service', 'Size guide', 'Contact us'],
  },
  {
    id: 'payments',
    title: 'Payments & Delivery',
    links: ['Purchase terms', 'Guarantee'],
  },
  {
    id: 'social',
    title: 'Social',
    links: ['insta', 'twitter', 'snapchat', 'facebook', 'youtube'],
    imgs: [insta, twitter, snapchat, facebook, youtube],
  },
];

const Footer = ({ width }) => {
  return (
    <div className="footer">
      <div className="register-container">
        <div className="register-content">
          <p className="register-text">
            New arrivals. Exclusive previews. First access to sales. Sign up to
            stay in the know.
          </p>
          <div className="register">
            <input
              className="register-email"
              type="email"
              placeholder="Your email address"
            />
            <button className="register-btn">register</button>
          </div>
        </div>
      </div>
      <div className="menu-container">
        {footerMenu.map((section, idx) => (
          <div className="menu-section" key={idx}>
            <p className="section-title" key={idx}>
              {section.title}
            </p>
            <nav className="links" id={section.id} key={section.id}>
              {section.id === 'social'
                ? section.imgs.map((img, idx) => (
                    <a
                      className="link"
                      href="/"
                      id={section.links[idx]}
                      style={{ marginBottom: '0' }}
                      key={idx}
                    >
                      <img src={img} alt={section.links[idx]} key={idx} />
                    </a>
                  ))
                : section.links.map((link, idx) => (
                    <a className="link" href="/" key={idx}>
                      {link}
                    </a>
                  ))}
            </nav>
          </div>
        ))}
      </div>
      <p className="copyright">
        © Copyright, Aurora 2020. All Rights reserved.
      </p>
    </div>
  );
};

export default Footer;
