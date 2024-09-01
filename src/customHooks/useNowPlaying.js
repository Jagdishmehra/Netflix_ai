import {API_MOVIES} from "../utilities/constants"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utilities/moviesSlice";

const useNowPlaying=()=>{
    const dispatch=useDispatch();

    const getNowPayingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', API_MOVIES);

        //console.log(data);
        const json= await data.json();
        //console.log(json);
        //console.log(json.results);
        dispatch(addNowPlayingMovie(json.results));
    }

    useEffect(()=>{
        getNowPayingMovies()
    },[]);

};

export default useNowPlaying;