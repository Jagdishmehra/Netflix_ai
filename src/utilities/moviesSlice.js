import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies= action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies= action.payload;
        },
        addLatestMovies:(state,action)=>{
            state.latestMovies= action.payload;
        },
        
    }
});

export const {addNowPlayingMovie,addLatestMovies, addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;

export default moviesSlice.reducer;