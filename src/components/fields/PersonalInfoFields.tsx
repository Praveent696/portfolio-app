import React from 'react';

interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

interface Props {
  personal: Personal;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const PersonalInfoFields: React.FC<Props> = ({ personal, onChange, errors }) => (
  <fieldset style={{marginBottom: 24, border: 'none', padding: 0}}>
    <legend style={{fontWeight: 600}}>Personal Info</legend>
    <label>Name: <input value={personal.name} onChange={e => onChange('name', e.target.value)} aria-invalid={!!errors.name} />{errors.name && <span style={{color:'red'}}> {errors.name}</span>}</label><br/>
    <label>Title: <input value={personal.title} onChange={e => onChange('title', e.target.value)} aria-invalid={!!errors.title} />{errors.title && <span style={{color:'red'}}> {errors.title}</span>}</label><br/>
    <label>Email: <input value={personal.email} onChange={e => onChange('email', e.target.value)} aria-invalid={!!errors.email} />{errors.email && <span style={{color:'red'}}> {errors.email}</span>}</label><br/>
    <label>Phone: <input value={personal.phone} onChange={e => onChange('phone', e.target.value)} aria-invalid={!!errors.phone} />{errors.phone && <span style={{color:'red'}}> {errors.phone}</span>}</label><br/>
    <label>Location: <input value={personal.location} onChange={e => onChange('location', e.target.value)} aria-invalid={!!errors.location} />{errors.location && <span style={{color:'red'}}> {errors.location}</span>}</label><br/>
  </fieldset>
);

export default PersonalInfoFields;
