import React from "react";
import style from "./paginaincial.module.css"
import { Link } from "react-router-dom";

const PaginaInicial = () => {

     return (
        <div  className={style.divm}>
         {/* <div className={style.div} >
           <img src="https://media.gq.com.mx/photos/60e9cc9c33c54bdef6761922/master/pass/E53RdQ5WQAIs7HC-scaled.jpg" className={style.img}/>   
         </div>
         <Link to='/paginaPrincipal'>
           <button className={style.home} type='submit'>home</button>
         </Link>  */}
         <div className={style.loader} >
          <span>bienvenido</span>
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
        </div>
      );
}

export default PaginaInicial
