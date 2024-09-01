
import { API_MOVIES } from '../utilities/constants'
import  { useEffect, useState } from 'react'

const VideoBackground = ({id}) => {
  const [trailerId, settrailerId]=useState(null);

  const movieData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/' 
      +id+ "/videos?language=en-US",API_MOVIES)
    
    const json=await data.json();
    const mainData=json.results.filter(video=> video.type==="Trailer");
    // console.log(mainData)
    const trailer= mainData.length ? mainData[0]:json.results[0];
    settrailerId(trailer.key); 
  }
  
  useEffect(()=>{
    movieData();
  },[])
  
  
  return (
    <div>
      <iframe  className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1" } 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    
  )
}

export default VideoBackground;
