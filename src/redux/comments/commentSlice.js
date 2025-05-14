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
      state.comments.unshift(action.payload);
    },
    replyComment: (state, action) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action) => {
      const index = state.comments.findIndex(c => c._id == action.payload._id);
      if(index !== -1) state.comments[index] = action.payload
    },
    deleteComment: (state, action) => {
      console.log(action.payload);
      state.comments = state.comments?.filter(comment => comment._id != action.payload);  // vi da thay doi comment o commentDetail
    }
  }
});

export const {setComment, setError, addComment, setLoading, updateComment, deleteComment, replyComment} = commentSlice.actions;

export default commentSlice.reducer;