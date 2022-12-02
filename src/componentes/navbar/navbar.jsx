import React from "react";
import style from './navbar.module.css';

import Filtros from "./filtros/filtros";
import SearchBar from "./seachBar/searchBar";
import Ordenamientos from "./ordenamientos/ordenamientos";

import { Link } from "react-router-dom";



const Navbar = () => {

    return (
       <div className={style.div}>

      <ul className={style.nav}>
 
   
       <Link to={`/`}>
        <li>
        <h3>pagina inicial</h3>
        </li>
       </Link>

       <Link to={`/paginaPrincipal`}>
        <li>
        <h3>home</h3>
        </li>
       </Link>
         
        <Link to={`/crearVideojuego`}>
          <li>
         <h3>crea tu videojuego</h3>
         </li>
        </Link>

        <Link to={`/contactanos`}>
          <li>
          <h3>contactanos</h3>
         </li>
         </Link>

        </ul>

        <SearchBar/>

        <Filtros/>

        <Ordenamientos/>

        
       </div>
     );
}

export default Navbar