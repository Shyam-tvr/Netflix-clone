import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, baseUrl, imageUrl } from '../../constants'
import './Rowpost.css'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const [movies, setMovies] = useState()
  const [urlId,setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
  })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key);
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className = "posters">
          {
            movies ? movies.map((obj)=><img onClick={()=>{handleMovie(obj.id)}} className={ props.isSmall ? "small-poster" : "poster" } src={`${imageUrl+obj.backdrop_path}`} alt="" />) : ''
          }  
        </div>
       { urlId && <YouTube opts={opts} videoId={urlId}/> }
    </div>
  )
}

export default Rowpost