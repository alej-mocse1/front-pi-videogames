import React from "react";
import { Link } from "react-router-dom";
import Style from './videogame.module.css'


const VideoGame = (props) => {


    return (
    
      <div className={Style.div}>
        <div className={Style.divv}>
         <Link to={`/paginaPrincipal/${props.id}`}>
           <img src={props.img} alt="" className={Style.img}/>
         </Link>
        </div>

       <h3 className={Style.text}>{props.nombre}</h3>
       <h3 className={Style.text}>{ `generos/  ${props.generos}  `}</h3>

      </div>
    
     );
}

export default VideoGame;


