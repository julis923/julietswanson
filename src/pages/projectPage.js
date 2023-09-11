import React, { useEffect, useState } from 'react';
import projects from '../projectData';
import ScrollToTop from '../components/scrollToTop';
import ProgressBar from 'react-scroll-progress-bar';
import { useNavigate } from 'react-router-dom';
import resume from '../files/FE+UX_JulietSwanson_Resume.pdf';
import { HashLink } from 'react-router-hash-link';
import arrow from '../assets/arrowIcon.png';

function ProjectPage() {
  const currId = window.location.pathname.split('/')[2];
  const project = projects.filter((proj) => proj.id === currId)[0];
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!project) {
    return null;
  }

  const {
    projectDetails,
    title,
    hex,
    subtitle,
    sections,
    bannerBtns,
    bannerImg,
  } = project;

  ScrollToTop();

  return (
    <>
      <div style={{ background: '#f9f9f9', width: '100vw' }}>
        <div className="nav-links project-header-nav-link">
          <HashLink
            to="/julietswanson/"
            smooth={true}
            className="back-arrow-container"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img src={arrow} alt="back to home" className="back-arrow" />
          </HashLink>
          <div>
            <HashLink to="/#about" smooth={true}>
              About
            </HashLink>

            <HashLink to="/#contact" smooth={true}>
              Contact
            </HashLink>
            <a href={resume} target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </div>
      </div>
      <ProgressBar bgcolor={hex} />
      <div className={`project-banner project-banner--${currId}`}>
        <div className="project-banner__content">
          <div className="project-banner__title">
            <h1 style={{ color: hex }}>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="project-banner__btns">
              {bannerBtns.map(({ text, link, classes }) => {
                return classes === 'external-link' ? (
                  <a key={text} href={link} target="_blank" rel="noreferrer">
                    <button
                      className={classes}
                      style={{
                        backgroundColor: 'white',
                        border: `2px solid ${hex}`,
                        color: hex,
                      }}
                    >
                      {text}
                    </button>
                  </a>
                ) : (
                  <HashLink
                    to={`${window.location.pathname}/#${link}`}
                    smooth={true}
                  >
                    <button
                      className={classes}
                      style={{
                        backgroundColor: hex,
                        border: `2px solid ${hex}`,
                      }}
                    >
                      {text}
                    </button>
                  </HashLink>
                );
              })}
            </div>
          </div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="project-details" id="case-study">
        <div className="project-details-content" ref={projectDetails}>
          {sections?.map(({ sectionTitle, subsections, caseStudyTitle }) => {
            return (
              <div className="section">
                <div className="project-section-banner">
                  {caseStudyTitle ? (
                    <h2 className="case-study-title">{caseStudyTitle}</h2>
                  ) : null}
                  <h2 key={sectionTitle} style={{ color: hex }}>
                    {sectionTitle}
                  </h2>
                </div>
                {subsections?.map((sub) => {
                  return (
                    <div className="subsection">
                      <h3>{sub.title}</h3>
                      {sub.text?.map((str, i) => {
                        return (
                          <>
                            <p>{str}</p>
                            {i !== sub.text.length ? <br /> : null}
                          </>
                        );
                      })}
                      {sub.image ? (
                        <img src={sub.image} alt={sub.imageAlt} />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
