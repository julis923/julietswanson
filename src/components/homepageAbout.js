import headshot from '../assets/headshot.png'
import React from 'react';


const HomepageAbout = () => {

    return (
        <div className="homepage-about">
            <h2 id="about">about</h2>
            <div className="homepage-about-copy">
                <div className="content">
                    <h3>welcome!</h3>
                    <p>I'm a web designer and developer located in the San Francisco Bay Area, and I'm really passionate about bringing brands and UX/UI concepts to life. I love seeing projects through from start to finish - from working with clients to develop on-brand user experiences and interfaces to building out the designs into beautiful, functional products. I specialize in developing React-based projects and I'm experienced with CSS/Sass, Node.js/Express, MongoDB and more.</p>
                    <br/>
                    <p>I love a good challenge, whether it be a design pain-point to solve or a new framework or tool to learn. Check out my portfolio below, and please reach out with any questions or opportunities! Thanks for stopping by.</p>
                </div>
                <div className="headshot-container">
                    <img src={headshot} className="headshot" alt="headshot"/>
                </div>
            </div>
        </div>
    )
}

export default HomepageAbout;