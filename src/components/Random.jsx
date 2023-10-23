import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

function Random() {
  const [gif, setGif] = useState('')


  async function getUrl() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const output = await axios.get(url)
    const image = output.data.data.images.original.url
    console.log(image)
    setGif(image)
  }

  useEffect(() => {
    getUrl()
  }, [])

  function clickHandler() {
    getUrl()
  }
  
  return (
    <div className='w-7/12 py-4 flex gap-4 justify-center flex-col items-center bg-green-500 rounded-lg'>

      {/* Heading */}
      <h2 className='text-xl font-medium decoration-slate-700 underline decoration-2'>A RANDOM GIF</h2>

      {/* Gif image */}
      <img src={gif} alt="gif_not" />

      {/* Gif generate button */}
      <button onClick={clickHandler} className='bg-white w-10/12 py-2 text-xl rounded-lg opacity-80 font-medium'>GENERATE GIF</button>

    </div>
  )
}

export default Random
