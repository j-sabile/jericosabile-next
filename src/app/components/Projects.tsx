import projects from "@/app/data/projects";
import "./debug.css";

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <h1 className="text-center pt-14 pb-3 font-semibold bg-white">Projects</h1>
      {projects.map((project, index) => (
        <section className="project flex justify-center p-4" style={{ backgroundColor: project.colorTheme }} key={index}>
          <div className="max-w-[1068px]">
            <h1 className="text-3xl md:text-4xl text-center mb-4 font-bold" style={{ color: project.textColor }}>
              {project.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5">
              <img src={project.logo} alt="logo" className="p-0 logo-project rounded-4xl shadow" style={{ width: "150px" }} />
              <div className="flex flex-col gap-2">
                <h4 style={{ color: project.textColor }}>
                  <span>Tech Stack: </span> {project.techStack}
                </h4>
                <p className="mb-4" style={{ color: project.textColor }}>
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="btn bg-[#3faa54] text-white rounded-md px-6 py-1">
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 btn border-1 rounded-md hover:opacity-50"
                    style={{ color: project.textColor, background: project.colorTheme }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Projects;
