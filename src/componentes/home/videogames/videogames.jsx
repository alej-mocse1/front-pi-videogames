import React from "react";
import { useEffect , useState  } from 'react';
import VideoGame from "./videogame/videogame";
import Style from './videogames.module.css'

const Videogames = (props)  => {



    const [videgamess, setvidegames] = useState([]);
    const [item , setitems] = useState([]);
    const [correnPage , setCurrentPage] = useState(0);


    useEffect(()=>{
        setitems(props.arr.slice(0,12))
        setvidegames(props.arr) 
    },[props.arr])


  const nextPage = () => {

    //  const totalElement = videgamess.length;
    
    //declaro nextPage con el el valor del estado local currentPage+1
     const nextPage = correnPage + 1;

    //declaro FirstIndex con el valor de la constante anterior*15
     const FirstIndex = nextPage * 12;

    //pregunto si FirstIndex es mayor que el total de videojuego corto con el return
     if(FirstIndex >  videgamess.length) return;

    //cambio mi estado local item(que es el que se renderiza)
     setitems([...videgamess].splice(FirstIndex,12))

    //cambio mi estado loca correnPage 
    setCurrentPage(nextPage)

  }


   const prevPage = () => {

   const prevPage = correnPage - 1;

   const FirstIndex = prevPage * 12;

   if(FirstIndex < 0) return;

   setitems([...videgamess].splice(FirstIndex,12))

   setCurrentPage(prevPage)
 }


    
    return (
        <div className={Style.div1}>

               <div className={Style.div}>
                     { item.map((Element)=> {
                      if (typeof Element == 'object') {
                        return <VideoGame 
                        key={Element.nombre}
                        nombre={Element.nombre} 
                        img={Element.imagen_backgrund} 
                        generos={Element.genres} 
                        id={Element.id}/>                      
                      }
                     
                   })}
               </div>

      <div className={Style.botones}>  
              <button className={Style.btn} onClick={prevPage}>
               <span>prev</span><i></i>
             </button>
             <button className={Style.btn} onClick={nextPage}>
               <span>next</span><i></i>
             </button>
             <h1 className={Style.muestra}>{correnPage}</h1>
             </div>
        </div>
      );
}

export default Videogames


