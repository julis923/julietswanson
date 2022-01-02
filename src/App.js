import NavBar from "./components/navbar";
import HomepageAbout from "./components/homepageAbout";
import HomepageProjects from "./components/HomepageProjects";
import React, { useState } from 'react'
import ParallaxBg from './components/parallaxBg';
import resizeFunction from './components/resizeFunction';
import ContactSection from './components/contactSection';

function App({ page }) {

  const [mobileNav, setMobileNav] = useState(false)
  const [resizing, setResizing] = useState(false)

  resizeFunction(setResizing, setMobileNav)


  return (
    <div className={`App ${mobileNav ? "no-overflow" : ""} ${resizing ? "no-transition" : ""}`}>
      <NavBar page={page} mobileNav={mobileNav} setMobileNav={setMobileNav} resizing={resizing} />
      <ParallaxBg classes={'homepage-bg-1'} resizing={resizing} mobileNav={mobileNav} bg={1}/>
      <HomepageAbout />
      <div style={{position: 'relative', height: '60vh', backgroundColor: 'rgb(253, 106, 0)', zIndex: '-1'}}>
        <ParallaxBg classes={'homepage-bg-2'} mobileNav={mobileNav} resizing={resizing} bg={2}/>
      </div>
      <HomepageProjects resizing={resizing} setResizing={setResizing} />
      <div style={{position: 'relative', height: '60vh', backgroundColor: '#f8b303', zIndex: '-1'}}>
        <ParallaxBg classes={'homepage-bg-3'} mobileNav={mobileNav} resizing={resizing} bg={3}/>
      </div>
      <ContactSection />
    </div>

  );
}

export default App;
