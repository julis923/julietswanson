import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const ParallaxBg = ({ classes, resizing, mobileNav, bg, iOS }) => {
  const wipeaway = useRef();
  const tl = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(wipeaway.current, { display: 'block', delay: 0 })
      .fromTo(
        wipeaway.current,
        { right: 0, delay: 0 },
        { left: 'auto', right: '100vw', duration: 0.25, ease: 'elastic', delay: 0 }
      )
      .to(wipeaway.current, { display: 'none', delay: 5 });
  }, [tl]);

  return (
    <div>
      <div
        ref={wipeaway}
        className={`${bg === 1 ? 'wipeaway' : ''}${
          resizing ? 'no-transition' : ''
        }`}
      ></div>
      <div
        className={`parallax-bg ${classes} ${mobileNav ? 'hidden' : ''} ${
          iOS ? 'no-fixed' : ''
        }`}
      ></div>
    </div>
  );
};

export default ParallaxBg;
