import React from "react";
import { useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { getSearchVideoGames15 , limpiarState } from '../../redux/actions/actions.js';
import style from './SearchVideoGames15.module.css';
import { Link } from "react-router-dom";


const SearchVideoGame15 = (props) => {

    const Dispatch = useDispatch();


    useEffect(()=> {
        Dispatch(limpiarState())
        Dispatch(getSearchVideoGames15(props.match.params.id))
    },[props.match.params.id])

    
  const VideoGames = useSelector(state => state.searchVideoGames)

  
    return (
        <div className={style.div}>
            <h2 className={style.h1} >{` ${props.match.params.id}`}</h2>
            <div className={style.div2}>
                {VideoGames.map((Element) => {
                    return <div className={style.divIndividual}>                        
                              <img  src={Element.imagen_backgrund}  className={style.img}/>
                             <Link to={`/paginaPrincipal/${Element.id}`}>
                              <h3 className={style.name}>{Element.nombre}</h3>
                             </Link>
                              <h4 className={style.genres}>genero : {Element.genres?.map(Element => `${Element}  `) }</h4>
                           </div>
                })}
            </div>
        </div>
    )
}


export default SearchVideoGame15;