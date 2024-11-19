import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: null,
    trailerVideo: null,
    addTopRatedMovies: null,
    addUpCommingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpCommingMovies: (state, action) => {
      state.addUpCommingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpCommingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
