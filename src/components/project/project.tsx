// src/components/Projects.jsx
interface IProject {
  /** The title of the project (e.g., "Safetychain Software (Harbinger Group)"). */
  title: string;

  /** The duration or date range of the project (e.g., "2024 to present"). */
  dates: string;

  /** A comma-separated string listing the key technologies used.
   * (Note: Includes [cite] annotations from the source data.)
   */
  techStack: string;

  /** A list of bullet points detailing project accomplishments or responsibilities. */
  details: string[];
}

interface ProjectProps {
    project: IProject
}

function Projects({ project }: ProjectProps) {
  // Simple utility to split the tech stack string into tags
  const formatTech = (techString: string) => {
    return techString.split(',').map(s => s.trim());
  };

  return (
    <article className="project-entry">
      <div className="header-row">
        <h4 className="project-title">{project.title}</h4>
        <span className="dates">{project.dates}</span>
      </div>
      
      <div className="tech-stack">
        {formatTech(project.techStack).map((tech, index) => (
          <span key={index} className="tag-pill">{tech}</span>
        ))}
      </div>

      <ul>
        {project.details.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default Projects;