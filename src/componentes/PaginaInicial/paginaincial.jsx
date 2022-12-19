import React from "react";
import style from "./paginaincial.module.css"
import { Link } from "react-router-dom";

const PaginaInicial = () => {

     return (
        <div  className={style.divm}>
         <div className={style.loader} >
          <span className={style.span}>Loading...</span>
         </div>

         <Link to='/paginaPrincipal'>
         <button className={style.button}>
         <span>Home</span>
         <div className={style.top} ></div>
         <div className={style.left} ></div>
         <div className={style.bottom}></div>
         <div className={style.right} ></div>
        </button>
        </Link> 

        <div className={style.spinner}>
           <span>L</span>
           <span>O</span>
           <span>A</span>
           <span>D</span>
           <span>I</span>
           <span>N</span>
           <span>G</span>

        </div>
        </div>
      );
}

export default PaginaInicial
