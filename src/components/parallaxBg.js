import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const ParallaxBg = ({ classes, resizing, mobileNav, bg }) => {

    const wipeaway = useRef();
    const tl = useRef();

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(wipeaway.current, { left: 0 }, { right: '100vw', left: "auto" })
    }, [tl])

    return (
        <div>
            <div ref={wipeaway} className={`${bg === 1 ? 'wipeaway' : ''}${resizing ? "no-transition" : ""}`}></div>
            <div className={`parallax-bg ${classes} ${mobileNav ? "hidden" : ""}`}></div>
        </div>

    )
}

export default ParallaxBg;