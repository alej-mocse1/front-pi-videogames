import React from "react";
import style from './ordenamientos.module.css';
import  { ordenarAZ , ordenarZA , ordenarAscendente , ordenarDescendente } from '../../../redux/actions/actions.js';
import { useDispatch } from "react-redux"


const Ordenamientos = () => {

    let dispatch = useDispatch()

const fn = (el) => {
if(el.target.value === 'ordenar')return
if(el.target.value === 'A-Z')dispatch(ordenarAZ())
if(el.target.value === 'Z-A')dispatch(ordenarZA())
}


const fn2 = (el) => {
    if(el.target.value === 'rating')return
    if(el.target.value === '1-5')dispatch(ordenarAscendente())
    if(el.target.value === '5-1')dispatch(ordenarDescendente())
}


    return(
        <div className={style.div} >
          <select className={style.select} onChange={e => fn(e)}>
              <option value="ordenar">ordenar</option>
              <option value="A-Z" >A - Z</option>
              <option value="Z-A">Z - A</option>
          </select>

          <select className={style.select2} onChange={e => fn2(e)} >
              <option value="rating">rating</option>
              <option value="1-5">1-5</option>
              <option value="5-1">5-1</option>
          </select>
        </div>
    )
}


export default Ordenamientos