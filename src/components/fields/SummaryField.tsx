import React from 'react';

interface Props {
  summary: string;
  onChange: (value: string) => void;
  error?: string;
}

const SummaryField: React.FC<Props> = ({ summary, onChange, error }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Summary</legend>
    <textarea value={summary} onChange={e => onChange(e.target.value)} rows={4} style={{width: '100%'}} />
    {error && <div style={{color:'red'}}>{error}</div>}
  </fieldset>
);

export default SummaryField;
