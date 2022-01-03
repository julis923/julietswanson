const isInProjects = (element) => {
    if (element && window.location.pathname !== '/') {
        const rect = element.getBoundingClientRect();
        return rect.top <= 0;
    }
}

const setProjectBar = (projects, setProjectNav, setMobileFilters, setViewProjects ) => {
    if (isInProjects(document.getElementById(projects[0].hashlink))) {
        setProjectNav(true)
    } else {
        setProjectNav(false)
        setMobileFilters(false)
        setViewProjects(false)
    }
}

export default setProjectBar;
