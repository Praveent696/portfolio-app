import React from 'react';

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  details: string[];
}

interface Props {
  experience: Experience[];
  onChange: (items: Experience[]) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  errors: Record<number, Record<string, string>>;
}

const ExperienceFields: React.FC<Props> = ({ experience, onChange, onAdd, onRemove, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Experience <button type="button" onClick={onAdd}>Add</button></legend>
    {experience.length === 0 && <div style={{color:'#888'}}>No experience added.</div>}
    {experience.map((exp, idx) => (
      <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
        <button type="button" onClick={() => onRemove(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
        <label>Company: <input value={exp.company} onChange={e => {
          const updated = experience.map((item, i) => i === idx ? { ...item, company: e.target.value } : item);
          onChange(updated);
        }} aria-invalid={!!errors[idx]?.company} />{errors[idx]?.company && <span style={{color:'red'}}> {errors[idx].company}</span>}</label><br/>
        <label>Role: <input value={exp.role} onChange={e => {
          const updated = experience.map((item, i) => i === idx ? { ...item, role: e.target.value } : item);
          onChange(updated);
        }} aria-invalid={!!errors[idx]?.role} />{errors[idx]?.role && <span style={{color:'red'}}> {errors[idx].role}</span>}</label><br/>
        <label>Location: <input value={exp.location} onChange={e => {
          const updated = experience.map((item, i) => i === idx ? { ...item, location: e.target.value } : item);
          onChange(updated);
        }} aria-invalid={!!errors[idx]?.location} />{errors[idx]?.location && <span style={{color:'red'}}> {errors[idx].location}</span>}</label><br/>
        <label>Duration: <input value={exp.duration} onChange={e => {
          const updated = experience.map((item, i) => i === idx ? { ...item, duration: e.target.value } : item);
          onChange(updated);
        }} aria-invalid={!!errors[idx]?.duration} />{errors[idx]?.duration && <span style={{color:'red'}}> {errors[idx].duration}</span>}</label><br/>
        <label>Details:<br/>
          <textarea value={exp.details.join('\n')} onChange={e => {
            const updated = experience.map((item, i) => i === idx ? { ...item, details: e.target.value.split('\n') } : item);
            onChange(updated);
          }} rows={3} style={{width: '100%'}} />
        </label>
      </div>
    ))}
  </fieldset>
);

export default ExperienceFields;
