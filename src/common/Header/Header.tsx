import React, { useState, useEffect } from 'react';
import DeptLogo from './../../assets/images/dept-logo.png';
import DeptLogoBlack from './../../assets/images/dept-logo-black.png';
import TriangleBig from './../../assets/icons/triangle-big.png';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as TriangleIcon } from './../../assets/icons/triangle.svg';
import './Header.scss';
import { NAVIGATION_ITEMS } from '../../constants';

const socialLinks = [
  { name: 'facebook', url: '/' },
  { name: 'twitter', url: '/' },
  { name: 'instagram', url: '/' },
  { name: 'linkedin', url: '/' },
];

const countriesLinks = [
  { name: 'global', url: '/' },
  { name: 'nederland', url: '/' },
  { name: 'united states', url: '/' },
  { name: 'ireland', url: '/' },
  { name: 'united kingdom', url: '/' },
  { name: 'deutschland', url: '/' },
  { name: 'schweiz', url: '/' },
];
const Header = () => {
  const [isModalOpen, setModalState] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setScrolled(!!document.body.scrollTop);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = (e: any) => {
    setScrolled(e.target.documentElement.scrollTop);
  };

  const onNavModalBtnClick = () => {
    document.body.classList.toggle('modal-opened');
    setModalState(!isModalOpen);
  };
  return (
    <header
      className={`header ${isModalOpen ? 'header__modal-open' : ''} ${
        isScrolled ? 'header__scrolled' : ''
      }`}
    >
      <div className="main-container">
        <div className="header--container">
          <Link to="/">
            {isModalOpen ? (
              <img src={DeptLogo} alt="logo" />
            ) : (
              <img src={DeptLogoBlack} alt="logo-black" />
            )}
          </Link>
          <button
            className="header--nav-modal-btn"
            onClick={onNavModalBtnClick}
          >
            Menu
          </button>
        </div>
      </div>
      <div className="header-nav-modal">
        <div className="main-container">
          <div className="header-nav-modal--container">
            <nav className="header-nav-modal--navigation">
              <ul>
                {[{ name: 'home', path: '/' }, ...NAVIGATION_ITEMS].map(
                  (navItem, i) => {
                    return (
                      <li key={i}>
                        <Link to={navItem.path}>
                          {navItem.path === location.pathname ? (
                            <img src={TriangleBig} alt="triangle" />
                          ) : null}
                          {navItem.name}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </nav>

            <div className="header-nav-modal--countries">
              <h5 className="header-nav-modal--heading">LANDEN</h5>
              <ul>
                {countriesLinks.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link to={link.url}>
                        {i === 1 ? <TriangleIcon /> : null}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="header-nav-modal--social-links">
              <ul>
                {socialLinks.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
