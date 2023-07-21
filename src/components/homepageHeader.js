import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap';

const HomepageHeader = ({ link1, link2, link3, link4, resizing }) => {

    const tl = useRef()
    const title1 = useRef()
    const title2 = useRef()
    const navName = useRef()

    useEffect(() => {
        tl.current = gsap.timeline()
        .to(navName.current, { opacity: 1, delay: 0.2, duration: 0.4 })
        .to(title1.current, { opacity: 1, delay: 0.2, duration: 0.3 })
        .to(title2.current, { opacity: 1, delay: 0.2, duration: 0.3 })
        .to(link1.current, { marginTop: 0, rotation: 0, delay: 0.1, duration: 0.2, ease: "elastic" })
        .to(link3.current, { marginTop: 0, rotation: 0, delay: 0.1, duration: 0.2, ease: "elastic" })
        .to(link2.current, { marginTop: 0, rotation: 0, delay: 0.1, duration: 0.2, ease: "elastic" })
        .to(link4.current, { marginTop: 0, rotation: 0, delay: 0.1, duration: 0.2, ease: "elastic" })
    }, [link1, link2, link3, link4])

    return (
        <>
        <div className={`nav-name ${resizing ? "no-transition" : ""}`}>
            <Link to="/">
                <h1 ref={navName}>juliet swanson</h1>
            </Link>
            <div className="nav-title">
                <h2 ref={title1}>frontend.</h2>
                <h2 ref={title2}>ux/ui.</h2>
            </div>
        </div>
        </>
    )
}

export default HomepageHeader;