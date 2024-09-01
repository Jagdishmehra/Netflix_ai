import React, { useEffect } from 'react'
import { API_MOVIES } from '../utilities/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utilities/moviesSlice'

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
  
            const upcoming=async()=>{
                const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_MOVIES)
                const json=await data.json()
                dispatch(addUpcomingMovies(json.results))
            };
            useEffect(()=>{
                upcoming()
            },[])

}

export default useUpcomingMovies
