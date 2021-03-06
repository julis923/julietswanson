
import projects from "../projectData";
import Project from "./project";
import { HashLink as Link } from 'react-router-hash-link';

const HomepageProjects = ({ resizing, setResizing }) => {


    return (
        <div className="homepage-projects">
            <h2 id="projects">projects</h2>
            <div className="projects-header">
                <h3>Featured Projects</h3>
                <p>Explore my featured projects below, or <Link to="/projects">browse all of my projects here.</Link> Most projects involve aspects of both design and programming/development.</p>
            </div>
            <div className="projects-container">
                {
                    projects.map((project, i) => {
                        if (project.tags.includes('featured')) {
                            return (
                                <div key={`homepage-project${i}`}>
                                    { i !== 0 ? <div className={`project-barrier ${i % 2 === 0 ? "barrier-left" : "barrier-right"}`}></div> : null }
                                    <Project title={project.title} description={project.description} mainImg={project.mainImg} types={project.types} tags={project.tags} viewCode={project.viewCode} viewLive={project.viewLive} viewDemo={project.viewDemo} project={project.project} projectProcess={project.projectProcess} details={project.details} resizing={resizing} setResizing={setResizing}/>
                                </div>
                            ) 
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default HomepageProjects;