import React from 'react'
import RandomGIF from './components/RandomGIF'
import SearchGIF from './components/SearchGIF'
import "./App.css"
import background from "./assets/background.jpeg"

const App = () => {
  return (
    <div className='container'>
      <div>
        <img src={background} alt="" className='myBg'/>
      </div>
      <div className='head'>
        <h1 className='title'>
          RANDOM GIFS
        </h1>
      </div>
      <div className='rnGif'>
        <RandomGIF/>
      </div>
      <div  className='srGif'>
        <SearchGIF/>
      </div>
    </div>
  )
}

export default App