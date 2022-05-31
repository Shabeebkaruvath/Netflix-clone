import axios from  '../../constants/axios'
import { API_KEY ,ImageUrl} from '../../constants/constants';
import React, { useEffect, useState } from "react";
import "./Poster.css";
function Poster(props) {

  const [show, setShow] = useState([])
  useEffect(() => {
    
    axios.get(props.url).then((response)=>{
       
      setShow(response.data.results)

    })
  }, [])
  

  return (
    <div className="row">
      <h2 className="head">{props.title}</h2>
      <div className="posters">
         {
           show.map((one)=>{
             return(
                <img
                className={props.isSmall ? 'smallposter': 'poster'}
                src={`${ImageUrl+one.backdrop_path}`}
                alt="poster"
                />
             )
           })
         }
      </div>
    </div>
  );
}

export default Poster;
