import './App.css';
import Awards from './components/award/award';
import Education from './components/education/education';
import Experience from './components/exprience/exprience';
import Header from './components/header/header';
import Projects from './components/project/project';
import ResumeForm from './components/ResumeForm';
import Skills from './components/skills/skills';
import Summary from './components/summary/summary';
import { useAppSelector } from './store/hooks';
import { useState } from 'react';

function App() {
  const [editing, setEditing] = useState(false);
  const resumeData = useAppSelector((state) => state.resume);

  return (
    <div className="resume-container">
      {!editing && (
        <button className="edit-resume-btn" style={{ marginBottom: 24 }} onClick={() => setEditing(true)}>
          Edit Resume
        </button>
      )}
      {editing ? (
        <>
          <ResumeForm />
          <button
            type="button"
            style={{ marginTop: 16 }}
            onClick={() => setEditing(false)}
          >
            Submit Resume
          </button>
        </>
      ) : (
        <>
          <Header data={resumeData.personal}></Header>
          <main>
            <Summary summary={resumeData.summary} />
            <Skills
              languages={resumeData.technologies.frameworks}
              tools={resumeData.technologies.tools}
            />
            {/* Experience Section - Mapping over array */}
            <section className="section-block">
              <h2>Experience</h2>
              <hr className="section-separator" />
              {resumeData.experience.map((job, index) => (
                <Experience key={index} job={job} />
              ))}
            </section>
            {/* Projects Section - Mapping over array */}
            <section className="section-block">
              <h2>Projects</h2>
              <hr className="section-separator" />
              {resumeData.projects.map((project, index) => (
                <Projects key={index} project={project} />
              ))}
            </section>
            {/* Education */}
            <Education data={resumeData.education} />
            {/* Awards */}
            <Awards awardList={resumeData.awards} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
