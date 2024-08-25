import { activeProjects } from "../../sources";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="wrapper">
        {" "}
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">پروژه ها</span>
          </h1>
        </div>
        <div className="projects-container">
          {activeProjects.map((project, index) => (
            <ProjectsCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
