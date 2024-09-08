import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  if(!movies.length) return null;

        //console.log(movies);
        return (     
    <div>
      <h1 className='md:p-8 md:text-3xl text-white p-2 md:py-4 text-xl'>{title}</h1>
      <div className='md:p-4 overflow-x-scroll p-2'>
      <div className='flex '>{movies.map((x)=> (<MovieCard key={x.id} poster={x.poster_path}/>))}
      </div>
      </div>
    </div>
  )
}

export default MovieList;
