import React, { useEffect, useState } from 'react'
import "./SearchGIF.css"
import axios from 'axios'
import Spinner from './Spinner'


const API_KEY = import.meta.env.VITE_API_URL

const SearchGIF = () => {

  const [tag, setTag] = useState(null)
  const [write, setWrite] = useState("")
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${write}`
    const result = await axios.get(url)
    const output = result.data.data.images.downsized_large.url
    setTag(output)
    // console.log(result)
    // console.log(output)
    setLoading(false)
  }

  
  useEffect(()=>{
    fetchData()
  },[])

  const clickHandler = ()=>{
    fetchData(setTag())
  }

  const changeHandler = (event)=>{
    setWrite(event.target.value)
  }

  return (
    <div>
      <h1 className='rnTitle'>A GIF OF {write}</h1>
      {
        loading ? (<Spinner/>) : (<img src={tag} alt="" className='rnImg'/>)
      }
      <div id='serSec'>
        <input type="text" name="" id="inpField" onChange={changeHandler}/>
        <button id='srBtn' onClick={clickHandler}>Search</button>
      </div>
    </div>
  )
}

export default SearchGIF