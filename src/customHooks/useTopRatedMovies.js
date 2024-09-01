
import  { useEffect } from 'react'
import { API_MOVIES } from '../utilities/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utilities/moviesSlice';
const useTopRatedMovies = () => {
    const dispatch=useDispatch();
  
    const getTopRated=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_MOVIES)
        const json=await data.json();
        //console.log(json);
        dispatch(addTopRatedMovies(json.results))

    };

    useEffect(()=>{
        getTopRated()
    },[])

};


export default useTopRatedMovies
