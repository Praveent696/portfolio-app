import React from 'react';

interface Props {
  technologies: { frameworks: string; tools: string };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const TechnologiesFields: React.FC<Props> = ({ technologies, onChange, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Technologies</legend>
    <label>Frameworks: <input value={technologies.frameworks} onChange={e => onChange('frameworks', e.target.value)} />{errors.frameworks && <span style={{color:'red'}}> {errors.frameworks}</span>}</label><br/>
    <label>Tools: <input value={technologies.tools} onChange={e => onChange('tools', e.target.value)} />{errors.tools && <span style={{color:'red'}}> {errors.tools}</span>}</label><br/>
  </fieldset>
);

export default TechnologiesFields;
