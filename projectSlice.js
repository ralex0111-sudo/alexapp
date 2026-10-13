
import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal website built with React.",
      category: "React"
    },
    {
      id: 2,
      title: "Employee Management",
      description: "Manage employee details and records.",
      category: "JavaScript"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "A website for digital marketing services.",
      category: "HTML/CSS"
    }
  ],
  reducers: {
    addProject: (state, action) => {
      state.push({
        ...action.payload,
        id: Date.now()
      });
    },
    updateProject: (state, action) => {
      const index = state.findIndex(
        p => p.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProject: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const {
  addProject,
  updateProject,
  deleteProject
} = projectSlice.actions;

export default projectSlice.reducer;
