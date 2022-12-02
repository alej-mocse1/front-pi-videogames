import React from "react";
import style from './filtros.module.css'
import { useDispatch } from 'react-redux';
import { filtrarXgenero , filtrarXcreacion } from '../../../redux/actions/actions.js'



const Filtros = () => {

let dispatch = useDispatch()

const fn = (el) => {
    if(el.target.value === "generos")return
    else{
        dispatch(filtrarXgenero(el.target.value))
    }  
}

const fn2 = (el) => {
    if(el.target.value == "juegos")return
    dispatch(filtrarXcreacion(el.target.value))
}

    return(
        <div className={style.div}>
           <select className={style.select} onChange={e => fn(e)}>
            <option value="generos">generos</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
           </select>

           <select className={style.select2} onChange={e => fn2(e)} >
            <option value="juegos">juegos</option>
            <option value="db">creados</option>
            <option value="api">existentes</option>
           </select>
        </div>
    )
}


export default Filtros