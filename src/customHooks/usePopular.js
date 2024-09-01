
import  { useEffect } from 'react'
import { API_MOVIES } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utilities/moviesSlice';
const usePopular = () => {
    const dispatch=useDispatch();
  
    const getPopular=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_MOVIES)
        const json=await data.json();
        //console.log(json);
        dispatch(addPopularMovies(json.results))

    };

    useEffect(()=>{
        getPopular()
    },[])

};


export default usePopular
