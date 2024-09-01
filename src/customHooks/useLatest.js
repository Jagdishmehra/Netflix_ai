import {API_MOVIES} from "../utilities/constants"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utilities/moviesSlice";

const useLatest=()=>{
    const dispatch=useDispatch();

    const getLatestMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/trending/movie/day', API_MOVIES);

        //console.log(data);
        const json= await data.json();
        //console.log(json);
        //console.log(json.results);
        dispatch(addLatestMovies(json.results));
    }

    useEffect(()=>{
        getLatestMovies()
    },[]);

};

export default useLatest;