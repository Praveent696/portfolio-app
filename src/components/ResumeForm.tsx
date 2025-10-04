import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  updatePersonal,
  updateSummary,
  updateTechnologies,
  updateExperience,
  updateProjects,
  updateEducation,
  updateAwards
} from '../store/resumeSlice';

const ResumeForm: React.FC = () => {
  const resume = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  // Helper for array fields
  const handleArrayChange = <T,>(arr: T[], idx: number, key: keyof T, value: any): T[] => {
    return arr.map((item, i) => i === idx ? { ...item, [key]: value } : item);
  };

  // Add/Remove handlers for array sections
  const addExperience = () => {
    const newExp = { company: '', role: '', location: '', duration: '', details: [''] };
    dispatch(updateExperience([...resume.experience, newExp]));
  };
  const removeExperience = (idx: number) => {
    const updated = resume.experience.filter((_, i) => i !== idx);
    dispatch(updateExperience(updated));
  };
  const addProject = () => {
    const newProj = { title: '', dates: '', techStack: '', details: [''] };
    dispatch(updateProjects([...resume.projects, newProj]));
  };
  const removeProject = (idx: number) => {
    const updated = resume.projects.filter((_, i) => i !== idx);
    dispatch(updateProjects(updated));
  };
  const addAward = () => {
    const newAward = { title: '', organization: '', year: '', month: '', priority: '', sourceText: '' };
    dispatch(updateAwards([...resume.awards, newAward]));
  };
  const removeAward = (idx: number) => {
    const updated = resume.awards.filter((_, i) => i !== idx);
    dispatch(updateAwards(updated));
  };

  return (
    <form style={{marginBottom: 32, background: '#f8f9fa', padding: 24, borderRadius: 8}}>
      <h2>Edit Resume Info</h2>
      {/* Personal Info */}
      <div style={{marginBottom: 16}}>
        <label>Name: <input value={resume.personal.name} onChange={e => dispatch(updatePersonal({ ...resume.personal, name: e.target.value }))} /></label>
      </div>
      <div style={{marginBottom: 16}}>
        <label>Title: <input value={resume.personal.title} onChange={e => dispatch(updatePersonal({ ...resume.personal, title: e.target.value }))} /></label>
      </div>
      <div style={{marginBottom: 16}}>
        <label>Email: <input value={resume.personal.email} onChange={e => dispatch(updatePersonal({ ...resume.personal, email: e.target.value }))} /></label>
      </div>
      <div style={{marginBottom: 16}}>
        <label>Phone: <input value={resume.personal.phone} onChange={e => dispatch(updatePersonal({ ...resume.personal, phone: e.target.value }))} /></label>
      </div>
      <div style={{marginBottom: 16}}>
        <label>Location: <input value={resume.personal.location} onChange={e => dispatch(updatePersonal({ ...resume.personal, location: e.target.value }))} /></label>
      </div>
      {/* Summary */}
      <div style={{marginBottom: 16}}>
        <label>Summary:<br/>
          <textarea value={resume.summary} onChange={e => dispatch(updateSummary(e.target.value))} rows={4} style={{width: '100%'}} />
        </label>
      </div>
      {/* Technologies */}
      <div style={{marginBottom: 16}}>
        <label>Frameworks: <input value={resume.technologies.frameworks} onChange={e => dispatch(updateTechnologies({ ...resume.technologies, frameworks: e.target.value }))} style={{width: '80%'}} /></label>
      </div>
      <div style={{marginBottom: 16}}>
        <label>Tools: <input value={resume.technologies.tools} onChange={e => dispatch(updateTechnologies({ ...resume.technologies, tools: e.target.value }))} style={{width: '80%'}} /></label>
      </div>
      {/* Experience */}
      <h3>Experience <button type="button" onClick={addExperience}>Add</button></h3>
      {resume.experience.map((exp, idx) => (
        <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
          <button type="button" onClick={() => removeExperience(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
          <label>Company: <input value={exp.company} onChange={e => dispatch(updateExperience(handleArrayChange(resume.experience, idx, 'company', e.target.value)))} /></label><br/>
          <label>Role: <input value={exp.role} onChange={e => dispatch(updateExperience(handleArrayChange(resume.experience, idx, 'role', e.target.value)))} /></label><br/>
          <label>Location: <input value={exp.location} onChange={e => dispatch(updateExperience(handleArrayChange(resume.experience, idx, 'location', e.target.value)))} /></label><br/>
          <label>Duration: <input value={exp.duration} onChange={e => dispatch(updateExperience(handleArrayChange(resume.experience, idx, 'duration', e.target.value)))} /></label><br/>
          <label>Details:<br/>
            <textarea value={exp.details.join('\n')} onChange={e => dispatch(updateExperience(handleArrayChange(resume.experience, idx, 'details', e.target.value.split('\n'))))} rows={3} style={{width: '100%'}} />
          </label>
        </div>
      ))}
      {/* Projects */}
      <h3>Projects <button type="button" onClick={addProject}>Add</button></h3>
      {resume.projects.map((proj, idx) => (
        <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
          <button type="button" onClick={() => removeProject(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
          <label>Title: <input value={proj.title} onChange={e => dispatch(updateProjects(handleArrayChange(resume.projects, idx, 'title', e.target.value)))} /></label><br/>
          <label>Dates: <input value={proj.dates} onChange={e => dispatch(updateProjects(handleArrayChange(resume.projects, idx, 'dates', e.target.value)))} /></label><br/>
          <label>Tech Stack: <input value={proj.techStack} onChange={e => dispatch(updateProjects(handleArrayChange(resume.projects, idx, 'techStack', e.target.value)))} style={{width: '80%'}} /></label><br/>
          <label>Details:<br/>
            <textarea value={proj.details.join('\n')} onChange={e => dispatch(updateProjects(handleArrayChange(resume.projects, idx, 'details', e.target.value.split('\n'))))} rows={3} style={{width: '100%'}} />
          </label>
        </div>
      ))}
      {/* Education */}
      <h3>Education</h3>
      <div style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
        <label>Institution: <input value={resume.education.institution} onChange={e => dispatch(updateEducation({ ...resume.education, institution: e.target.value }))} /></label><br/>
        <label>Degree: <input value={resume.education.degree} onChange={e => dispatch(updateEducation({ ...resume.education, degree: e.target.value }))} /></label><br/>
        <label>Duration: <input value={resume.education.duration} onChange={e => dispatch(updateEducation({ ...resume.education, duration: e.target.value }))} /></label><br/>
        <label>GPA: <input value={resume.education.gpa} onChange={e => dispatch(updateEducation({ ...resume.education, gpa: e.target.value }))} /></label><br/>
        <label>Coursework:<br/>
          <textarea value={resume.education.coursework} onChange={e => dispatch(updateEducation({ ...resume.education, coursework: e.target.value }))} rows={2} style={{width: '100%'}} />
        </label>
      </div>
      {/* Awards */}
      <h3>Awards <button type="button" onClick={addAward}>Add</button></h3>
      {resume.awards.map((award, idx) => (
        <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
          <button type="button" onClick={() => removeAward(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
          <label>Title: <input value={award.title} onChange={e => dispatch(updateAwards(handleArrayChange(resume.awards, idx, 'title', e.target.value)))} /></label><br/>
          <label>Organization: <input value={award.organization} onChange={e => dispatch(updateAwards(handleArrayChange(resume.awards, idx, 'organization', e.target.value)))} /></label><br/>
          <label>Year: <input value={award.year} onChange={e => dispatch(updateAwards(handleArrayChange(resume.awards, idx, 'year', e.target.value)))} /></label><br/>
          <label>Month: <input value={award.month} onChange={e => dispatch(updateAwards(handleArrayChange(resume.awards, idx, 'month', e.target.value)))} /></label><br/>
          <label>Source Text: <input value={award.sourceText} onChange={e => dispatch(updateAwards(handleArrayChange(resume.awards, idx, 'sourceText', e.target.value)))} style={{width: '80%'}} /></label>
        </div>
      ))}
    </form>
  );
};

export default ResumeForm;
