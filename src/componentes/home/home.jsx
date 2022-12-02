
import React from "react";
import Style from "./home.module.css";
import { useDispatch , useSelector } from 'react-redux';
import { getVideoGames } from '../../redux/actions/actions.js';
import { useEffect , useState } from 'react';
import Videogames from "./videogames/videogames";



const Home = (props) => {

 
    let dispatch = useDispatch()   

    let result = useSelector((state)=> state.videogames)

useEffect(()=>{
dispatch(getVideoGames())

},[])


    return (
        <div >
          <Videogames  arr={result}></Videogames>
        </div>
      );
 }

 export default Home






