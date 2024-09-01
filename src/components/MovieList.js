import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  if(!movies.length) return null;

        //console.log(movies);
        return (     
    <div>
      <h1 className='p-8 text-3xl text-white'>{title}</h1>
      <div className='p-4 overflow-x-scroll'>
      <div className='flex'>{movies.map((x)=> (<MovieCard key={x.id} poster={x.poster_path}/>))}
      </div>
      </div>
    </div>
  )
}

export default MovieList;
