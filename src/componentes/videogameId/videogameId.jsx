import React from "react";
import style from './videogameId.module.css'
import { useDispatch , useSelector } from 'react-redux';
import { getVideoGamesid , limpiarState } from '../../redux/actions/actions.js';
import { useEffect , useState  } from 'react';



const VideoGameId = (props) => {

    const [state, setState] = useState(props.match.params.id)
 
    let dispatch = useDispatch()


useEffect(()=>{
dispatch(limpiarState())
dispatch(getVideoGamesid(state))

},[props.match.params.id])





let result = useSelector((state)=> state.videogamesid)


    return (
      <div  className={style.divGrande}>
        <div className={style.div}>
            <h2  className={style.letra} >{result.nombre}</h2>
            <img src={result.imagen_backgrund} className={style.img}/>
            <h3>fecha de lanzamiento : {result.Fecha_de_lanzamiento}</h3>
            <h3>generos : {result.genres?.map(Element => `${Element}  `)}</h3>
            <h3>rating : {result.Rating}</h3>
            <h4>plataformas : {result.Plataformas?.map(Element => `${Element}  `)}</h4>
            <p className={style.p}>{result.Descripción}</p>
        </div>
       </div>
      );
 }

 export default VideoGameId
