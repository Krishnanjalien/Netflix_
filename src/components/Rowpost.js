import React, { useEffect, useState } from 'react'
import'./Rowpost.css'
import {imageUrl,API_KEY} from '../constants'
import axios from '../axios'
import YouTube from 'react-youtube'



function Rowpost(props) {
  const[movie,setMovie]=useState([])
  const[urlId,setUrlId]=useState('')
  useEffect 
  (()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      
      setMovie(response.data.results)
    })
    .catch(err=>{alert('Network error')
  })
    
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    console.log("empty")
  }
  })
}

   
  return (
    <div> 
        
        <h2 className='row'>{props.name}  </h2>
        <div className='posters'>
        {movie.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallposter':'poster'}src={`${imageUrl+obj.backdrop_path}`}/>
        )}
        
        </div>
      {urlId &&<YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
        }
                
        
  

  export default Rowpost
