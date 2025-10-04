import React from 'react';

interface Award {
  title: string;
  organization: string;
  year: string | number;
  month: string | number;
  priority: string | number;
  sourceText: string;
}

interface Props {
  awards: Award[];
  onChange: (items: Award[]) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
  errors: Record<number, Record<string, string>>;
}

const AwardsFields: React.FC<Props> = ({ awards, onChange, onAdd, onRemove, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Awards <button type="button" onClick={onAdd}>Add</button></legend>
    {awards.length === 0 && <div style={{color:'#888'}}>No awards added.</div>}
    {awards.map((award, idx) => (
      <div key={idx} style={{border: '1px solid #ddd', padding: 8, marginBottom: 8, borderRadius: 4}}>
        <button type="button" onClick={() => onRemove(idx)} style={{float: 'right', color: 'red'}}>Remove</button>
        <label>Title: <input value={award.title} onChange={e => {
          const updated = awards.map((item, i) => i === idx ? { ...item, title: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.title && <span style={{color:'red'}}> {errors[idx].title}</span>}</label><br/>
        <label>Organization: <input value={award.organization} onChange={e => {
          const updated = awards.map((item, i) => i === idx ? { ...item, organization: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.organization && <span style={{color:'red'}}> {errors[idx].organization}</span>}</label><br/>
        <label>Year: <input value={award.year} onChange={e => {
          const updated = awards.map((item, i) => i === idx ? { ...item, year: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.year && <span style={{color:'red'}}> {errors[idx].year}</span>}</label><br/>
        <label>Month: <input value={award.month} onChange={e => {
          const updated = awards.map((item, i) => i === idx ? { ...item, month: e.target.value } : item);
          onChange(updated);
        }} />{errors[idx]?.month && <span style={{color:'red'}}> {errors[idx].month}</span>}</label><br/>
        <label>Source Text: <input value={award.sourceText} onChange={e => {
          const updated = awards.map((item, i) => i === idx ? { ...item, sourceText: e.target.value } : item);
          onChange(updated);
        }} style={{width: '80%'}} />{errors[idx]?.sourceText && <span style={{color:'red'}}> {errors[idx].sourceText}</span>}</label>
      </div>
    ))}
  </fieldset>
);

export default AwardsFields;
