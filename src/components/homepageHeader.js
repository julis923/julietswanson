import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
//import bgImg from '../assets/homepage_bg.png';

const HomepageHeader = ({ resizing }) => {
  const tl = useRef();
  const title1 = useRef();
  const title2 = useRef();
  const navName = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(navName.current, { opacity: 1, delay: 0.2, duration: 0.4 })
      .to(title1.current, { opacity: 1, delay: 0.2, duration: 0.3 })
      .to(title2.current, { opacity: 1, delay: 0.2, duration: 0.3 });
  }, []);

  return (
    <>
      <div className={`nav-name ${resizing ? 'no-transition' : ''}`}>
        <Link to="/">
          <h1 ref={navName}>Juliet Swanson</h1>
        </Link>
        <div className="nav-title">
          <h2 ref={title1}>Frontend.</h2>
          <h2 ref={title2}>UX/UI.</h2>
        </div>
      </div>
      {/* <div className="homepage_bg">
        <img src={bgImg} alt="background design" />
      </div> */}
    </>
  );
};

export default HomepageHeader;
