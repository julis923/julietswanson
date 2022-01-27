const isInProjects = (element) => {
    if (element && window.location.pathname !== '/') {
        const rect = element.getBoundingClientRect();
        return rect.top <= 0;
    }
}

const setProjectBar = (projects, setProjectNav, setMobileFilters, setViewProjects ) => {
    console.log(projects)
    if (isInProjects(document.getElementById('projects-container')) || isInProjects(document.querySelector('.projects-page-header'))) {
        setProjectNav(true)
    } else {
        setProjectNav(false)
        setMobileFilters(false)
        setViewProjects(false)
    }
}

const iOS = () => {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
  }

export {
    setProjectBar,
    iOS
};
