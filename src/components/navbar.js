import React, { useEffect, useState, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import HomepageHeader from "./homepageHeader";
import GeneralHeader from "./generalHeader"
import resume from '../files/Juliet-Swanson_2022.pdf'

const NavBar = ({ page, mobileNav, setMobileNav, resizing }) => {

    const [projectLinks, setProjectLinks] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        if (mobileNav) {
            body.classList.add('no-overflow');
        } else {
            body.classList.remove('no-overflow');
        }
    }, [mobileNav])
    

    const link1 = useRef()
    const link2 = useRef()
    const link3 = useRef()
    const link4 = useRef()


    return (
        <div className="navbar">
                { page === 'homepage' ? <HomepageHeader page={page} link1={link1} link2={link2} link3={link3} link4={link4} resizing={resizing} /> : <GeneralHeader />}
            <div className="nav-links">
                <Link to="/#about" ref={link1} smooth className={page === 'homepage' ? "homepage-header-nav-link askew-15" : ""}>about</Link>                
                <div className={`project-links-container ${page === 'homepage' ? "homepage-header-nav-link askew-30" : ""}`} ref={link2}>
                    <Link to="/projects" className={`project-page-link project-main-link`} onMouseOver={() => setProjectLinks(true)} onMouseLeave={() => setProjectLinks(false)}>projects</Link>
                    <div className={projectLinks ? "project-links" : "invisible"} onMouseOver={() => setProjectLinks(true)} onMouseLeave={() => setProjectLinks(false)}>
                        <Link to="/projects" className={projectLinks ? "project-page-link" : "hidden"}>view all</Link>
                        <Link to="/#projects" smooth className={projectLinks ? "project-page-link" : "hidden"}>featured</Link>
                    </div>
                </div>
                <Link to="/#contact" ref={link3} smooth className={page === 'homepage' ? "homepage-header-nav-link askew-15" : ""}>contact</Link>
                <a href={resume} ref={link4} target="_blank" rel="noreferrer" className={page === 'homepage' ? "homepage-header-nav-link askew-15" : ""}>resume</a>
            </div>
            <div className="mobile-nav-links" onClick={() => setMobileNav(!mobileNav)}>
                <div className={mobileNav ? "top-mobile-div" : ""}></div>
                <div className={mobileNav ? "center-mobile-div" : ""}></div>
                <div className={mobileNav ? "bottom-mobile-div" : ""}></div>
            </div>
            <div className={`mobile-nav-expanded  ${mobileNav ? "mobile-nav-expanded-visible" : ""} ${resizing ? "no-transition" : "" }`}>
                <div className="mobile-nav-btn-container">
                        <div className="mobile-nav-btn">
                            <Link to="/#about" smooth onClick={() =>  setMobileNav(!mobileNav)}>about</Link>
                        </div>
                        <div className="mobile-nav-btn">
                            <Link to="/projects" onClick={() =>  setMobileNav(!mobileNav)}>projects</Link>
                        </div>
                        <div className="mobile-nav-btn">
                            <Link to="/#contact" smooth onClick={() =>  setMobileNav(!mobileNav)}>contact</Link>
                        </div>
                        <div className="mobile-nav-btn">
                            <a href={resume} target="_blank" rel="noreferrer" onClick={() =>  setMobileNav(!mobileNav)}>resume</a>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar;