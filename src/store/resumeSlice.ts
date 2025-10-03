import { createSlice } from '@reduxjs/toolkit';
import resumeData from '../data/resumeData';

const initialState = resumeData;

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    // Add reducers here if you want to update resume data
  },
});

export default resumeSlice.reducer;
