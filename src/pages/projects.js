import NavBar from "../components/navbar";
import React,  { useState, useEffect } from "react";
import resizeFunction from '../components/resizeFunction';
import projects from "../projectData";
import Project from "../components/project";
import { NavHashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import ChevronSvg from '../components/chevronSvg';
import setProjectBar from '../components/viewFunctions';
import filterIcon from '../assets/filter-icon.png'


const Projects = () => {

    const [mobileNav, setMobileNav] = useState(false)
    const [projectNav, setProjectNav] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [resizing, setResizing] = useState(false)
    const [toggler, setToggler] = useState(false)
    const [viewProjects, setViewProjects] = useState(false)
    const [mobileFilters, setMobileFilters] = useState(false)

    resizeFunction(setResizing, setMobileNav, setMobileFilters)

    const filters = ['featured', 'front-end', 'full-stack', 'ux/ui', 'branding']

    const handleFilters = (filter) => {
        if (selectedFilters.includes(filter)) {
            let newFilters = [...selectedFilters] 
            newFilters.splice(newFilters.indexOf(filter), 1);
            setSelectedFilters(newFilters)
        } else {
            setSelectedFilters([...selectedFilters, filter])
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname !== '/projects' || window.location.pathname !== '/' ) {
            navigate('/projects')
        }
    }, [navigate])

    useEffect(() => {
            if (selectedFilters[0]) {
                let array = []
                projects.forEach(project => {
                    let tags = project.tags;
                    let matches = 0;
                    tags.forEach(tag => {
                        if (selectedFilters.includes(tag)) {
                            matches++
                            if (!array.includes(project) && (matches === selectedFilters.length)) {
                                array.push(project)
                                setFilteredProjects(array)
                                let top = document.getElementById(filteredProjects[0].hashlink)
                                top.scrollIntoView({behavior: "smooth"})
                            }
                        } 
                    })
                })
            } else {
                setFilteredProjects(projects)
                let top = document.getElementById(filteredProjects[0].hashlink)
                top.scrollIntoView({behavior: "smooth"})
            }
            
    }, [selectedFilters])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        if (window.location.pathname !== '/') {
            window.addEventListener('scroll', () => {
                setProjectBar(projects, setProjectNav, setMobileFilters, setViewProjects)       
            })
            window.addEventListener('click', (e) => {
                
                if (mobileFilters && e.target.id !== 'filter-icon') {
                    setMobileFilters(false)
                }
            })
            return () => {
                window.removeEventListener('scroll', null)
            } 
        }
    })

    useEffect(() => {
        if (mobileFilters) {
            setViewProjects(false)
        }
    }, [mobileFilters])
    
    return (
        <div className="projects-page">
            <NavBar page={'projects'} mobileNav={mobileNav} setMobileNav={setMobileNav} resizing={resizing} />
            <div className="projects-banner">
                <div className="projects-bg"></div>
            </div>
            <div className="projects-page-header">
                <h2>all projects</h2>
            </div>
            <div className={`${projectNav ? "projects-menu-fixed" : "projects-menu-fixed no-transition invisible no-pointer-events"} ${resizing ? "no-transition" : ""} `}>
                    <div className="hashlinks-menu" id="view-projects">
                        <div className="current-hash-container" id="view-project-container" onClick={() => setViewProjects(!viewProjects)}>
                            <p className="current-hash">Projects</p>
                            <ChevronSvg fill="white" setToggler={setToggler} viewProjects={viewProjects} className="chevron" id="chevron"/>
                        </div>      
                        <div className={viewProjects ? "hashlinks-dropdown" : "hashlinks-dropdown invisible no-pointer-events"}>
                            {filteredProjects.map((project, i) => {
                                const to = `/projects/#${project.hashlink}`
                                return <NavHashLink 
                                        to={to} 
                                        smooth 
                                        key={`${project.title}${i}-hashlink`}
                                        onClick={() => setViewProjects(false)}
                                        className='hashlink'
                                        >  
                                        {project.title}
                                    </NavHashLink> 
                            })}
                        </div>
                    </div>
                    
                    <div className="filter-container">
                        <div className="filter-mobile-icon" onClick={() => setMobileFilters(!mobileFilters)} id="filter-icon">
                            <img src={filterIcon} alt="filter icon"/>
                        </div>
                        <div className='filters'>
                            {
                                filters.map((filter, i) => {
                                    return (
                                        <p key={`filter${i}`} onClick={() => handleFilters(filter)} className={selectedFilters.includes(filter) ? "selected-filter" : ""}>{filter}</p>
                                    )   
                                })
                            }
                        </div>
                        <div className={mobileFilters ? 'mobile-filters-container' : 'mobile-filters-container invisible'}>
                            {
                                filters.map((filter, i) => {
                                    return (
                                        <p key={`filter${i}`} onClick={() => handleFilters(filter)} className={selectedFilters.includes(filter) ? "selected-filter" : ""}>{filter}</p>
                                    )   
                                })
                            }
                        </div>
                        {
                            selectedFilters[0] ? <p className="clear-filters" onClick={() => setSelectedFilters([])}>clear filters ({selectedFilters.length})</p> : null
                        }
                        
                    </div>
            </div>
            <div className="projects-container projects-page-container">
            
                    {
                        filteredProjects.map((project, i) => { 
                            return (
                                    <div className="project-container" key={`project-page-project-${project.title}-${i}`}>
                                        <Project hashlink={project.hashlink} title={project.title} description={project.description} mainImg={project.mainImg} types={project.types} tags={project.tags} viewCode={project.viewCode} viewLive={project.viewLive} project={project.project} projectProcess={project.projectProcess} details={project.details} resizing={resizing} setResizing={setResizing} key={`homepage-project-${project.title}-${i}`} />                      
                                    </div>
                            )  
                        })
                    }
                    
            </div>
        </div>
        
    )
}

export default Projects;