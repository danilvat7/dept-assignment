import React from 'react';

import DeptLogo from './../../assets/images/dept-logo.png';
import FbIcon from './../../assets/icons/fb.png';
import InstagramIcon from './../../assets/icons/instagram.png';
import TwitterIcon from './../../assets/icons/twitter.png';

import './Footer.scss';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../constants';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const sociaLinks = [
  { logo: FbIcon, url: '' },
  { logo: TwitterIcon, url: '' },
  { logo: InstagramIcon, url: '' },
];
const Footer = () => {
  return (
    <div className="main-container main-container__footer">
      <footer className="footer">
        <div className="footer--top">
          <div className="footer--logo">
            <Link to="/">
              <img src={DeptLogo} alt="logo" />
            </Link>
          </div>
          <nav className="footer--navigation">
            <ul>
              {NAVIGATION_ITEMS.map((navItem, i) => {
                return (
                  <li key={i}>
                    <Link to="/">{navItem.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="footer--social">
            <ul>
              {sociaLinks.map((link, i) => {
                return (
                  <li key={i}>
                    <a href="/">
                      <img src={link.logo} alt="social-logo" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer--bottom">
          <div className="footer--common-info">
            <ul>
              <li>Chamber of Commerce: 63464101</li>
              <li>VAT: NL 8552.47.502.B01</li>
              <li>
                <a href="/">Terms and conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer--copyright">&#169; 2018 Dept Agency</div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Footer;
