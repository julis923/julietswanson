import NavBar from './components/navbar';
import HomepageAbout from './components/homepageAbout';
import HomepageProjects from './components/HomepageProjects';
import React, { useState } from 'react';
import resizeFunction from './components/resizeFunction';
import ContactSection from './components/contactSection';
import ScrollToTop from './components/scrollToTop';

function App({ page }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [resizing, setResizing] = useState(false);

  resizeFunction(setResizing, setMobileNav);
  ScrollToTop();

  return (
    <div
      className={`App ${mobileNav ? 'no-overflow' : ''} ${
        resizing ? 'no-transition' : ''
      }`}
    >
      <NavBar
        page={page}
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        resizing={resizing}
      />
      <HomepageProjects resizing={resizing} setResizing={setResizing} />
      <HomepageAbout />
      <ContactSection />
    </div>
  );
}

export default App;
