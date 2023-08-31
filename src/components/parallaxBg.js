import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const ParallaxBg = ({ classes, resizing, mobileNav, bg, iOS }) => {
  const wipeaway = useRef();
  const tl = useRef();

  return (
    <div>
      <div
        ref={wipeaway}
        className={`${bg === 1 ? 'wipeaway' : ''}${
          resizing ? 'no-transition' : ''
        }`}
      ></div>
      {/* <div
        className={`parallax-bg ${classes} ${mobileNav ? 'hidden' : ''} ${
          iOS ? 'no-fixed' : ''
        }`}
      ></div> */}
    </div>
  );
};

export default ParallaxBg;
