import React from 'react';

interface Project {
  title: string;
  dates: string;
  techStack: string;
  details: string[];
}

interface Props {
  projects: Project[];
  onChange: (items: Project[]) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  errors: Record<number, Record<string, string>>;
}

const ProjectsFields: React.FC<Props> = ({ projects, onChange, onAdd, onRemove, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Projects <button type="button" onClick={onAdd}>Add</button></legend>
    {projects.length === 0 && <div style={{color:'#888'}}>No projects added.</div>}
    {projects.map((proj, idx) => (
      <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
        <button type="button" onClick={() => onRemove(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
        <label>Title: <input value={proj.title} onChange={e => {
          const updated = projects.map((item, i) => i === idx ? { ...item, title: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.title && <span style={{color:'red'}}> {errors[idx].title}</span>}</label><br/>
        <label>Dates: <input value={proj.dates} onChange={e => {
          const updated = projects.map((item, i) => i === idx ? { ...item, dates: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.dates && <span style={{color:'red'}}> {errors[idx].dates}</span>}</label><br/>
        <label>Tech Stack: <input value={proj.techStack} onChange={e => {
          const updated = projects.map((item, i) => i === idx ? { ...item, techStack: e.target.value } : item);
          onChange(updated);
        }} style={{width: '80%'}} />{errors[idx]?.techStack && <span style={{color:'red'}}> {errors[idx].techStack}</span>}</label><br/>
        <label>Details:<br/>
          <textarea value={proj.details.join('\n')} onChange={e => {
            const updated = projects.map((item, i) => i === idx ? { ...item, details: e.target.value.split('\n') } : item);
            onChange(updated);
          }} rows={3} style={{width: '100%'}} />
        </label>
      </div>
    ))}
  </fieldset>
);

export default ProjectsFields;
