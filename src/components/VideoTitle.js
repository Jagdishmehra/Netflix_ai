
import React from 'react'

const VideoTitle = ({title,overview}) => {

  
  return (
    <div className='absolute w-full aspect-video md:pt-[15%] md:px-10 pt-14 mx-1 '>
      <h1 className="md:font-bold md:text-4xl text-sm text-white">{title}
      </h1>
      <p className='font-thin md:text-lg md:w-1/3 md:mt-4 text-white w-72 text-xs'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-opacity-70 p-2 md:px-8 rounded-md md:text-lg text-xs'>▶️Play</button>
        <button className='bg-gray-300 md:p-2 md:px-8 rounded-md md:text-lg m-3 md:bg-opacity-40 p-2 hover:bg-white text-xs'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
