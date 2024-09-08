import React from 'react'
import { IMG_LIST_URL } from '../utilities/constants'

const MovieCard = ({poster}) => {
    //console.log(poster);
    if(!poster) return null;
  return (
    //<div>
      <img className="rounded-sm md:w-44 w-32 md:p-2 p-1 transition-transform duration-200 ease-out transform hover:scale-[1.2] " src={IMG_LIST_URL + poster } alt='movie poster'/>
    //</div>
  )
}

export default MovieCard
