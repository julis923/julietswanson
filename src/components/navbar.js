import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import resume from '../files/FE+UX_JulietSwanson_Resume.pdf';

const NavBar = ({ mobileNav, setMobileNav, resizing }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (mobileNav) {
      body.classList.add('no-overflow');
      body.scrollTo(0, 0);
    } else {
      body.classList.remove('no-overflow');
    }
  }, [mobileNav]);

  /**
   * The function `setMobile` toggles the value of `mobileNav` using the previous value.
   */
  const setMobile = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <>
      <div className="nav-links">
        <HashLink to="/#about" smooth>
          About
        </HashLink>

        <HashLink to="/#contact" smooth>
          Contact
        </HashLink>
        <a href={resume} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
      <div className="banner">
        <div className="banner__inner">
          <h1>
            <span className="hi">Hi! </span>
            I'm Juliet, a Brooklyn-based Product/UX Designer and Frontend
            Engineer. I love creating empathetic and scalable designs.
          </h1>
        </div>
        <div
          className={`mobile-nav-links ${
            mobileNav ? 'mobile-nav-links-fixed' : ''
          }`}
          onClick={setMobile}
        >
          <div className={mobileNav ? 'top-mobile-div' : ''}></div>
          <div className={mobileNav ? 'center-mobile-div' : 'center-div'}></div>
          <div className={mobileNav ? 'bottom-mobile-div' : ''}></div>
        </div>
        <div
          className={`mobile-nav-expanded  ${
            mobileNav ? 'mobile-nav-expanded-visible' : ''
          } ${resizing ? 'no-transition' : ''}`}
        >
          <div className="mobile-nav-btn-container">
            <div className="mobile-nav-btn">
              <HashLink
                to="/#about"
                smooth
                onClick={() => setMobileNav(!mobileNav)}
              >
                about
              </HashLink>
            </div>
            <div className="mobile-nav-btn">
              <HashLink to="/projects" onClick={() => setMobileNav(!mobileNav)}>
                projects
              </HashLink>
            </div>
            <div className="mobile-nav-btn">
              <HashLink
                to="/#contact"
                smooth
                onClick={() => setMobileNav(!mobileNav)}
              >
                contact
              </HashLink>
            </div>
            <div className="mobile-nav-btn">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileNav(!mobileNav)}
              >
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
