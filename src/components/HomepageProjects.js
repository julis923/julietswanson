import projects from '../projectData';
import Project from './project';

const HomepageProjects = ({ resizing, setResizing }) => {
  return (
    <div className="homepage-projects" id="featured">
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              mainImg={project.mainImg}
              types={project.types}
              tags={project.tags}
              hex={project.hex}
              viewCode={project.viewCode}
              project={project.project}
              projectProcess={project.projectProcess}
              details={project.details}
              resizing={resizing}
              setResizing={setResizing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomepageProjects;
