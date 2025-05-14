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
      state.tasks.push(action.payload);
    },
  }
});

export const {setComment, setError, addComment, setLoading} = commentSlice.actions;

export default commentSlice.reducer;