import React from 'react';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  coursework: string;
}

interface Props {
  education: Education;
  onChange: (field: keyof Education, value: string) => void;
  errors: Record<string, string>;
}

const EducationFields: React.FC<Props> = ({ education, onChange, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Education</legend>
    <label>Institution: <input value={education.institution} onChange={e => onChange('institution', e.target.value)} />{errors.institution && <span style={{color:'red'}}> {errors.institution}</span>}</label><br/>
    <label>Degree: <input value={education.degree} onChange={e => onChange('degree', e.target.value)} />{errors.degree && <span style={{color:'red'}}> {errors.degree}</span>}</label><br/>
    <label>Duration: <input value={education.duration} onChange={e => onChange('duration', e.target.value)} />{errors.duration && <span style={{color:'red'}}> {errors.duration}</span>}</label><br/>
    <label>GPA: <input value={education.gpa} onChange={e => onChange('gpa', e.target.value)} />{errors.gpa && <span style={{color:'red'}}> {errors.gpa}</span>}</label><br/>
    <label>Coursework:<br/>
      <textarea value={education.coursework} onChange={e => onChange('coursework', e.target.value)} rows={2} style={{width: '100%'}} />
      {errors.coursework && <span style={{color:'red'}}> {errors.coursework}</span>}
    </label>
  </fieldset>
);

export default EducationFields;
