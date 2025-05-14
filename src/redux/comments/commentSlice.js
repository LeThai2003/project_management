import {createSlice} from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: null
  },
  reducers: {
    setLoading : (state) => {
      state.loading = true;
      state.error = null;
    },
    setComment : (state, action) => {
      state.loading = false;
      state.error = null;
      state.comments = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action) => {
      const index = state.comments.findIndex(c => c._id == action.payload._id);
      if(index !== -1) state.comments[index] = action.payload
    }
  }
});

export const {setComment, setError, addComment, setLoading, updateComment} = commentSlice.actions;

export default commentSlice.reducer;