interface IEducationData {
  /** The name of the educational institution (e.g., "GGSIPU University, Delhi"). */
  institution: string;

  /** The type of degree earned (e.g., "B.Tech. (Computer Science & Engineering)"). */
  degree: string;

  /** The duration or date range of study (e.g., "May 2011 to May 2015"). */
  duration: string;

  /** The Grade Point Average or equivalent score (e.g., "8.1/10.0"). */
  gpa: string;

  /** A comma-separated list of relevant coursework. */
  coursework: string;
}

interface IEducationSection {
  /** The top-level container object for the education details. */
  data: IEducationData;
}

function Education({ data }: IEducationSection) {
  return (
    <section className="education-section">
      <h3>Education</h3>
      <hr className="section-separator" />
      <div className="education-entry">
        <div className="header-row">
          <h4 className="degree">{data.degree}</h4>
          <span className="dates">{data.duration}</span>
        </div>
        <div className="subheader-row">
          <span className="institution">{data.institution}</span>
          <span className="gpa">GPA: {data.gpa}</span>
        </div>
        <div className="coursework">
          <strong>Coursework:</strong>
          {data.coursework.split(',').map((course, idx) => (
            <span key={idx} className="tag-pill">{course.trim()}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;