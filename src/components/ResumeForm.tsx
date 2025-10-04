import React, { useState, forwardRef, useImperativeHandle } from 'react';
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
import PersonalInfoFields from './fields/PersonalInfoFields';
import SummaryField from './fields/SummaryField';
import TechnologiesFields from './fields/TechnologiesFields';
import ExperienceFields from './fields/ExperienceFields';
import ProjectsFields from './fields/ProjectsFields';
import EducationFields from './fields/EducationFields';
import AwardsFields from './fields/AwardsFields';

// --- Types ---
interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}
interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  details: string[];
}
interface Project {
  title: string;
  dates: string;
  techStack: string;
  details: string[];
}
interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  coursework: string;
}
interface Award {
  title: string;
  organization: string;
  year: string | number;
  month: string | number;
  priority: string | number;
  sourceText: string;
}
interface ResumeState {
  personal: Personal;
  summary: string;
  technologies: { frameworks: string; tools: string };
  experience: Experience[];
  projects: Project[];
  education: Education;
  awards: Award[];
}
type FieldError = Record<string, string>;
type ArrayFieldError = Record<number, FieldError>;

const validateEmail = (email: string) => /.+@.+\..+/.test(email);

const ResumeForm = forwardRef<{ validate: () => boolean }, object>((_props, ref) => {
  const resume: ResumeState = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<FieldError>({});
  const [expErrors, setExpErrors] = useState<ArrayFieldError>({});
  const [projErrors, setProjErrors] = useState<ArrayFieldError>({});
  const [awardErrors, setAwardErrors] = useState<ArrayFieldError>({});

  // Validation
  const validate = () => {
    const errs: FieldError = {};
    if (!resume.personal.name) errs.name = 'Required';
    if (!resume.personal.title) errs.title = 'Required';
    if (!resume.personal.email) errs.email = 'Required';
    else if (!validateEmail(resume.personal.email)) errs.email = 'Invalid email';
    if (!resume.personal.phone) errs.phone = 'Required';
    if (!resume.personal.location) errs.location = 'Required';
    if (!resume.summary) errs.summary = 'Required';
    setErrors(errs);
    // Experience validation
    const expErrs: ArrayFieldError = {};
    resume.experience.forEach((exp, i) => {
      expErrs[i] = {};
      if (!exp.company) expErrs[i].company = 'Required';
      if (!exp.role) expErrs[i].role = 'Required';
      if (!exp.location) expErrs[i].location = 'Required';
      if (!exp.duration) expErrs[i].duration = 'Required';
    });
    setExpErrors(expErrs);
    // Projects validation
    const projErrs: ArrayFieldError = {};
    resume.projects.forEach((proj, i) => {
      projErrs[i] = {};
      if (!proj.title) projErrs[i].title = 'Required';
      if (!proj.dates) projErrs[i].dates = 'Required';
      if (!proj.techStack) projErrs[i].techStack = 'Required';
    });
    setProjErrors(projErrs);
    // Awards validation
    const awdErrs: ArrayFieldError = {};
    resume.awards.forEach((awd, i) => {
      awdErrs[i] = {};
      if (!awd.title) awdErrs[i].title = 'Required';
      if (!awd.organization) awdErrs[i].organization = 'Required';
      if (!awd.year) awdErrs[i].year = 'Required';
      if (!awd.month) awdErrs[i].month = 'Required';
    });
    setAwardErrors(awdErrs);
    return Object.keys(errs).length === 0 &&
      Object.values(expErrs).every((e) => Object.keys(e).length === 0) &&
      Object.values(projErrs).every((e) => Object.keys(e).length === 0) &&
      Object.values(awdErrs).every((e) => Object.keys(e).length === 0);
  };

  // Add/Remove handlers for array sections
  const addExperience = () => {
    const newExp: Experience = { company: '', role: '', location: '', duration: '', details: [''] };
    dispatch(updateExperience([...resume.experience, newExp]));
  };
  const removeExperience = (idx: number) => {
    const updated = resume.experience.filter((_, i) => i !== idx);
    dispatch(updateExperience(updated));
  };
  const addProject = () => {
    const newProj: Project = { title: '', dates: '', techStack: '', details: [''] };
    dispatch(updateProjects([...resume.projects, newProj]));
  };
  const removeProject = (idx: number) => {
    const updated = resume.projects.filter((_, i) => i !== idx);
    dispatch(updateProjects(updated));
  };
  const addAward = () => {
    const newAward: Award = { title: '', organization: '', year: '', month: '', priority: '', sourceText: '' };
    dispatch(updateAwards([...resume.awards, newAward]));
  };
  const removeAward = (idx: number) => {
    const updated = resume.awards.filter((_, i) => i !== idx);
    dispatch(updateAwards(updated));
  };

  // Section onChange handlers
  const handlePersonalChange = (field: string, value: string) => {
    dispatch(updatePersonal({ ...resume.personal, [field]: value }));
  };
  const handleSummaryChange = (value: string) => {
    dispatch(updateSummary(value));
  };
  const handleTechnologiesChange = (field: string, value: string) => {
    dispatch(updateTechnologies({ ...resume.technologies, [field]: value }));
  };
  const handleExperienceChange = (items: Experience[]) => {
    dispatch(updateExperience(items));
  };
  const handleProjectsChange = (items: Project[]) => {
    dispatch(updateProjects(items));
  };
  const handleEducationChange = (field: keyof Education, value: string) => {
    dispatch(updateEducation({ ...resume.education, [field]: value }));
  };
  const handleAwardsChange = (items: Award[]) => {
    dispatch(updateAwards(items));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validate();
    if (!valid) {
      // Optionally scroll to first error field
      const firstErrorField = document.querySelector('input[aria-invalid="true"]');
      if (firstErrorField) {
        (firstErrorField as HTMLElement).focus();
      }
      return;
    }
    // Optionally, you can dispatch a save or show a success message here
  };

  useImperativeHandle(ref, () => ({
    validate
  }));

  return (
    <form style={{marginBottom: 32, background: '#f8f9fa', padding: 24, borderRadius: 8}} onSubmit={handleSubmit}>
      <h2>Edit Resume Info</h2>
      <PersonalInfoFields personal={resume.personal} onChange={handlePersonalChange} errors={errors} />
      <SummaryField summary={resume.summary} onChange={handleSummaryChange} error={errors.summary} />
      <TechnologiesFields technologies={resume.technologies} onChange={handleTechnologiesChange} errors={{}} />
      {resume.experience.length > 0 && (
        <ExperienceFields experience={resume.experience} onChange={handleExperienceChange} onAdd={addExperience} onRemove={removeExperience} errors={expErrors} />
      )}
      {resume.projects.length > 0 && (
        <ProjectsFields projects={resume.projects} onChange={handleProjectsChange} onAdd={addProject} onRemove={removeProject} errors={projErrors} />
      )}
      <EducationFields education={resume.education} onChange={handleEducationChange} errors={{}} />
      {resume.awards.length > 0 && (
        <AwardsFields awards={resume.awards} onChange={handleAwardsChange} onAdd={addAward} onRemove={removeAward} errors={awardErrors} />
      )}
    </form>
  );
});

export default ResumeForm;
