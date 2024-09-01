import React from 'react'
import { IMG_LIST_URL } from '../utilities/constants'

const MovieCard = ({poster}) => {
    //console.log(poster);
  return (
    //<div>
      <img className="rounded-sm w-44 p-2 transition-transform duration-200 ease-out transform hover:scale-[1.2] " src={IMG_LIST_URL + poster } alt='movie poster'/>
    //</div>
  )
}

export default MovieCard
