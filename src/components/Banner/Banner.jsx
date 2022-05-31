import axios from  '../../constants/axios'
import { API_KEY ,ImageUrl} from '../../constants/constants';
import React, { useEffect, useState } from "react";
import "./Banner.css";


function Banner() {
  
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/tv/week?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results.sort(function (a, b)
       { return 0.5 - Math.random() })[0])

    })
  }, [])


  return (
    <div className="Banner" style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path :''})`}} >
      <div className="content">
         
        <h1 className="name1">{movie ? movie.name : ""}</h1>
        <p>
          <span>Release Date : {movie ? movie.first_air_date :''}</span>
        </p>
        <div className="btns">
          <button className="btn">PLAY</button>
          <button className="btn">MY LIST</button>
        </div>
        <div className="dicsd">
          <p className="disc1">
          {movie ? movie.overview : ""}
          </p>
          <p className="disc2">
            <span>Language</span> : {movie ? movie.original_language :''}
          </p>
          <p className="disc3">
            <span>Country</span> : {movie ? movie.origin_country :''} 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
