import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HomepageHeader from './homepageHeader';
import GeneralHeader from './generalHeader';
import resume from '../files/FE+UX_JulietSwanson_Resume.pdf';

const NavBar = ({ page, mobileNav, setMobileNav, resizing }) => {
  const [projectLinks, setProjectLinks] = useState(false);

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
    <div className="navbar">
      {page === 'homepage' ? (
        <HomepageHeader page={page} resizing={resizing} />
      ) : (
        <GeneralHeader />
      )}
      <div className="nav-links homepage-header-nav-link">
        <div className="project-links-container">
          <Link
            to="/projects"
            className={`project-page-link project-main-link`}
            onMouseOver={() => setProjectLinks(true)}
            onMouseLeave={() => setProjectLinks(false)}
          >
            projects
          </Link>
          <div
            className={projectLinks ? 'project-links' : 'invisible'}
            onMouseOver={() => setProjectLinks(true)}
            onMouseLeave={() => setProjectLinks(false)}
          >
            <Link
              to="/projects"
              className={
                projectLinks ? 'project-page-link dropdown-link' : 'hidden'
              }
            >
              view all
            </Link>
            <Link
              to="/#featured"
              smooth
              className={
                projectLinks ? 'project-page-link dropdown-link' : 'hidden'
              }
            >
              featured
            </Link>
          </div>
        </div>
        <Link to="/#about" smooth>
          about
        </Link>

        <Link to="/#contact" smooth>
          contact
        </Link>
        <a href={resume} target="_blank" rel="noreferrer">
          resume
        </a>
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
            <Link to="/#about" smooth onClick={() => setMobileNav(!mobileNav)}>
              about
            </Link>
          </div>
          <div className="mobile-nav-btn">
            <Link to="/projects" onClick={() => setMobileNav(!mobileNav)}>
              projects
            </Link>
          </div>
          <div className="mobile-nav-btn">
            <Link
              to="/#contact"
              smooth
              onClick={() => setMobileNav(!mobileNav)}
            >
              contact
            </Link>
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
  );
};

export default NavBar;
