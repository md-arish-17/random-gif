import React, { useEffect, useState } from 'react'
import "./RandomGIF.css"
import axios from 'axios'
import Spinner from './Spinner';


const API_KEY = import.meta.env.VITE_API_URL;

const RandomGIF = () => {

  const [gif, setGif] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const result = await axios.get(url)
    const output = result.data.data.images.downsized_large.url
    setGif(output)
    // console.log(output) 
    setLoading(false)  
  }

  useEffect(()=>{
    fetchData()
  },[])

  const clickHandler = ()=>{
    setGif(fetchData())
  }



  return (
    <div>
      <h2 id='srTitle'>A RANDOM GIF</h2>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="" className='rnImg'/>)
      }
      <button id='genBtn' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default RandomGIF