import { createSlice } from '@reduxjs/toolkit';
import resumeData from '../data/resumeData';

const initialState = resumeData;


const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonal(state, action) {
      state.personal = action.payload;
    },
    updateSummary(state, action) {
      state.summary = action.payload;
    },
    updateTechnologies(state, action) {
      state.technologies = action.payload;
    },
    updateExperience(state, action) {
      state.experience = action.payload;
    },
    updateProjects(state, action) {
      state.projects = action.payload;
    },
    updateEducation(state, action) {
      state.education = action.payload;
    },
    updateAwards(state, action) {
      state.awards = action.payload;
    },
  },
});

export const {
  updatePersonal,
  updateSummary,
  updateTechnologies,
  updateExperience,
  updateProjects,
  updateEducation,
  updateAwards
} = resumeSlice.actions;
export default resumeSlice.reducer;
