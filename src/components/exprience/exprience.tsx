// src/components/Experience.jsx
export interface IJobDetail {
  /** The name of the company. */
  company: string;

  /** The job title or role held. */
  role: string;

  /** The geographical location of the job. */
  location: string;

  /** The duration of the employment (e.g., "Mar. 2022 to Nov. 2024"). */
  duration: string;

  /** A list of bullet points describing responsibilities or achievements.
   * (Note: Includes [cite] annotations from the source data.)
   */
  details: string[];
}

export interface IJobSection {
  /** An array containing all individual job entries. */
  job: IJobDetail;
}

function Experience({job} : IJobSection) {
  return (
    <article className="experience-entry">
      <div className="header-row">
        <h4 className="role">{job.role}</h4>
        <span className="dates">{job.duration}</span>
      </div>
      <div className="subheader-row">
        <span className="company">{job.company}</span>
        <span className="location">{job.location}</span>
      </div>
      
      <ul>
        {job.details.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default Experience;