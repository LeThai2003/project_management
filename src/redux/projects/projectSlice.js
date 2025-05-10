import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: []
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(item => item._id == action.payload._id);
      if(index !== -1)
      {
        state.projects[index] = action.payload;
      }
    }
  }
});

export const {setProjects, addProject, updateProject} = projectSlice.actions;
export default projectSlice.reducer;