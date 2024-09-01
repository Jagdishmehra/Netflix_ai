
import React from 'react'

const VideoTitle = ({title,overview}) => {

  
  return (
    <div className='absolute w-full aspect-video pt-[20%] px-10  '>
      <h1 className="font-bold text-4xl text-white">{title}
      </h1>
      <p className='font-thin text-lg w-1/3 mt-4 text-white'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-opacity-70 p-2 px-8 rounded-md text-lg'>▶️Play</button>
        <button className='bg-gray-300 p-2 px-8 rounded-md text-lg m-3 bg-opacity-40 hover:bg-white'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
