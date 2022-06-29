import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
  const[movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[Math.floor((Math.random() * 20) + 1)])
    })
  },[])
 console.log(movie);
  return (
    <div style={{backgroundImage :`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title : ''}</h1>
            <div className="bannerButtons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h5 className="description">{movie ? movie.overview : ''}</h5>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner