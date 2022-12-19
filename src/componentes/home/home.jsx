import React from "react";
import { useDispatch , useSelector } from 'react-redux';
import { getVideoGames } from '../../redux/actions/actions.js';
import { useEffect , useState } from 'react';
import Videogames from "./videogames/videogames";
import Carrusel from "./carrusel/carrusel.jsx";
import style from './home.module.css'




const Home = (props) => {

 
    let dispatch = useDispatch()   

    let result = useSelector((state)=> state.videogames)

useEffect(()=>{
dispatch(getVideoGames())

},[])


    return (
        <div >
          <div className={style.div}>
          <Carrusel></Carrusel>
          </div>
          <Videogames  arr={result}></Videogames>
        </div>
      );
 }

 export default Home






