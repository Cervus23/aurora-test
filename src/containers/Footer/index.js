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

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        {footerMenu.map((section) => (
          <div className="menu-section">
            <p className="section-title">{section.title}</p>
            <nav className="links" id={section.id}>
              {section.id === 'social'
                ? section.imgs.map((img, idx) => (
                    <a
                      className="link"
                      href="/"
                      id={section.links[idx]}
                      style={{ marginBottom: '0' }}
                    >
                      <img src={img} alt={section.links[idx]} />
                    </a>
                  ))
                : section.links.map((link) => (
                    <a className="link" href="/">
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
