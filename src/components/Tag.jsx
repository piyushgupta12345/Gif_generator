import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Tag() {

    const [gif, setGif] = useState('')
    const [tag, setTag] = useState('')


    async function getUrl() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
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
        <div className='w-7/12 py-4 flex justify-center gap-4 flex-col items-center bg-blue-500 rounded-lg'>

            {/* Heading */}
            <h2 className='text-xl font-medium decoration-black decoration-2 underline'>A RANDOM GIF</h2>

            {/* Tag Gif image */}
            <img src={gif} alt="gif_not" />

            {/* input */}
            <input
                className='bg-white w-10/12 py-1 outline-none text-lg text-center rounded-lg opacity-80 font-normal'
                type="text"
                onChange={(e)=> e.target.value}
                value={tag}
            />

            {/* Gif generate button */}
            <button onClick={clickHandler} className='bg-white w-10/12 py-2 text-xl rounded-lg opacity-80 font-medium'>GENERATE GIF</button>

        </div>
    )
}

export default Tag
