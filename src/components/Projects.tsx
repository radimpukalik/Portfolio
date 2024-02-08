import { FC, useState, useEffect } from "react";
import { projects } from "../data/projects";

const Projects: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="project" id="projects">
      <div className="project-container">
        <h3>{"<Projects />"}</h3>
        {projects.map((project, index) => (
          <div className="project-container-grid" key={index + 1}>
            <div className="project-item">
              <div
                className={`project-item-left ${
                  index % 2 === 1 && windowWidth > 900 && "project-item-left-new-left"
                }`}
              >
                <div className="project-item-left-laptop">
                  <img src={project.image} alt="laptop-image" className="picture" />
                </div>
                <div className="project-item-left-mobile">
                  <img src={project.imageMobile} alt="mobile-image" className="picture" />
                </div>
              </div>

              <div
                className={`project-item-right ${
                  index % 2 === 1 && windowWidth > 900 && "project-item-right-new-right"
                }`}
              >
                <h2 className="project-item-right-header">{project.name}</h2>
                <div className="project-item-right-languages">
                  {project.languages.map((language, index) => (
                    <div key={index} className="project-item-right-languages-item">
                      {language}
                    </div>
                  ))}
                </div>
                <p className="project-item-right-text">{project.description}</p>
                <div className="project-item-right-hyperlink">
                  <a href={project.siteLink} className="project-item-right-hyperlink-item">
                    View Site
                  </a>
                  <a href={project.gitHubLink} className="project-item-right-hyperlink-item">
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
