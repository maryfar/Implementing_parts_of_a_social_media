// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
//   try {
//     const response = await axios.get("https://your-api-url/posts"); 
//     return response.data.posts;
//   } catch (error) {
//     throw Error("Failed to fetch posts");
//   }
// });

// export const postSlice = createSlice({
//   name: 'post',
//   initialState: {
//     postsList: [],
//     loading: 'idle',
//     error: null
//   },
//   reducers: {
//     // Additional reducers can be added here if needed
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.loading = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.loading = 'idle';
//         state.postsList = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.loading = 'idle';
//         state.error = action.error.message;
//       });
//   }
// });

// export default postSlice.reducer;