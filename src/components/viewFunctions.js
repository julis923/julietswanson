const isInViewport = (element) => {
    if (element && window.location.pathname !== '/') {
        const rect = element.getBoundingClientRect();
        return (
            rect.bottom >= 1 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

const isInProjects = (element) => {
    if (element && window.location.pathname !== '/') {
        const rect = element.getBoundingClientRect();
        return rect.top <= 0;
    }
}

const setHash = (projects, setCurrentHash, setProjectNav, setMobileFilters, setViewProjects ) => {
    const inView = []
    const portions = []
    projects.forEach(project => {
        const el = document.getElementById(project.hashlink)
        if (isInViewport(el)) {
            inView.push(project.hashlink)
            portions.push(el)
            setCurrentHash(inView[0])
        }
    })
    if (isInProjects(document.getElementById(projects[0].hashlink))) {
        setProjectNav(true)
    } else {
        setProjectNav(false)
        setMobileFilters(false)
        setViewProjects(false)
    }
}

export default setHash;
