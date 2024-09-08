import { useRef, useState } from 'react'
import { model } from './GeminiApi';
import { API_MOVIES } from '../utilities/constants';
import MovieList from './MovieList';

const GptSearchBar = () => {
  const[movielist, setmovielist]=useState([]);
  
    const searchtext=useRef(null);
    const tmdbSearch=async(moviess)=>{
      try{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+moviess+"&include_adult=true&language=en-US&page=1", API_MOVIES)
      const json=await data.json();
      //console.log(json.results);
      return json.results ||[]}
      catch(error){
        console.error("error loading movies")
      }
    };
    
    const handleSearchclick=async()=>{
      const searchInput =searchtext.current.value
        //console.log(searchtext.current.value);
        //const movies="heimer, Barbie, Talk to Me, Stray, The Creator, The Nun II, Killers of the Flower Moon, Haunted Mansion, Saw X  "
        const inputText= " Act as a Movie Recommendation system and suggest movies for the query : " + searchInput + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don , Golmaal , Koi Mil Gaya"
    const result = await model.generateContent(inputText);
    //console.log(result);
    const response = await result.response;
    //console.log(response);
   const text = response.text();
     //console.log(text);
    const movie=text.split(',')
    //console.log(movie);
    const promisearray= movie.map((m)=>tmdbSearch(m))

    const tmdbresults=await Promise.all(promisearray);
      console.log(tmdbresults);
      setmovielist(tmdbresults);

    }

  return (
    <div>
    <div className='md:-mt-[45%] flex md:justify-center -mt-[100%]'>
      <form className='bg-black bg-opacity-90 p-4 grid grid-cols-12 md:w-1/2 rounded-lg w-[90%]' onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchtext}
        className='md:p-3 md:m-2 col-span-10 text-xs md:text-lg'type='text' placeholder='What would you like to watch?'/>
        <button className='bg-red-700 md:m-2 col-span-2 m-1 rounded-lg text-xs md:text-xl'onClick={handleSearchclick}>
            Search
        </button>
      </form>
    </div>
    <div className='absolute bg-black my-4 mx-2 flex flex-wrap'>
      {movielist&& (movielist?.map((m,index)=><MovieList key={index} 
      movies={m}/>))}
    </div>
    </div>
    
  )
}

export default GptSearchBar
