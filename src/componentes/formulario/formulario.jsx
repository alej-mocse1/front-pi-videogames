import React from "react";
import style from './formulario.module.css'
import { useState } from "react";
import axios from 'axios';
 



const Validate = (input) => {

let err =  {
  nombre:'',
  description:'',
  Fecha_de_lanzamiento:'',
  Rating:'',
  Plataformas:'',
  generes:'',
  imagen_backgrund:''
}

 if(!input.nombre)err.nombre = "el videojuego tiene que contar con un nombre"

 if(!input.imagen_backgrund)err.imagen_backgrund = 'el videojuego tiene que contar con imagen'

 if(!input.description)err.description = 'el videojuego tiene que contar con descripcion'

 if(!input.Fecha_de_lanzamiento)err.Fecha_de_lanzamiento = 'el videojuego tiene que contar con Fecha de lanzamiento'

 if(!input.Rating)err.Rating = 'el videojuego tiene que contar con Rating'

 if(input.Plataformas.length === 0)err.Plataformas = 'el videojuego tiene que contar con plataforma'

 if(input.generes.length === 0)err.generes = 'el videojuego tiene que contar con generos'

 




if(input.nombre.length){
  if(input.nombre.length > 30 || input.nombre.length < 3)err.nombre = 'debe tener entre 3 y 30 caracteres'
}

 if(input.imagen_backgrund.length){
  if(input.imagen_backgrund.length > 300 || input.imagen_backgrund.length < 3 )err.imagen_backgrund = 'debe tener entre 3 y 300 caracteres'
 }

if(input.description){
  if(input.description.length > 300 || input.description.length < 3 )err.description = 'debe tener entre 3 y 300 caracteres'
 }

 if(input.Rating.length){
  if(input.Rating.length > 5 || input.Rating.length < 1)err.Rating = 'debe estar entre 1 y 5'
}

if(input.Fecha_de_lanzamiento){
  if(input.Fecha_de_lanzamiento.length < 3 || input.Fecha_de_lanzamiento.length > 10)err.Fecha_de_lanzamiento = 'debe tener entre 3 y 10 caracteres'
 }

 return err;
}





const Formulario = () => {


  const [ input , setInput] = useState({
      nombre:'',
      description:'',
      Fecha_de_lanzamiento:'',
      Rating:'',
      Plataformas:[],
      generes:[],
      imagen_backgrund:''
    })

  const [err , setError] = useState({})


  const fn = (e) => {
    setInput({
      ...input,
     [e.target.name] : e.target.value
    })
    setError(Validate({
      ...input,
     [e.target.name] : e.target.value
    }))
   
   
  }


  const fnSelect = (e) => {

    for(let i = 0 ; i < input.Plataformas.length ; i++){
      if(input.Plataformas[i] == e.target.value) return
    }


    if(input.Plataformas.length < 6){
    setInput({
      ...input,
      Plataformas: [...input.Plataformas,e.target.value]
    })
    setError(Validate({
      ...input,
      Plataformas :[...input.Plataformas,e.target.value]
    }))
   }  
  }

  
  const fnSelect2 = (e) => {

    for(let i = 0 ; i < input.generes.length ; i++){
      if(input.generes[i] == e.target.value) return
    }

    


    if(input.generes.length < 6){
    setInput({
      ...input,
      generes: [...input.generes ,e.target.value]
    })
    setError(Validate({
      ...input,
      generes :[...input.generes,e.target.value]
    }))
  }
  }
  

const subirVideojuego = () => {


  axios.post('https://back-pivideogames-production.up.railway.app/videogames', {
          nombre: input.nombre,
          description: input.description,
          Fecha_de_lanzamiento: input.Fecha_de_lanzamiento,
          Rating: Number(input.Rating),
          Plataformas: input.Plataformas,
          generes: input.generes,
          imagen_backgrund: input.imagen_backgrund
    }
  )  
  setInput({
    nombre :'',
    description :'',
    Fecha_de_lanzamiento :'',
    Rating :'',
    Plataformas :[],
    generes :[],
    imagen_backgrund :'' 
})

}



    return(
        <div className={style.div}>
            <div className={style.div2}>
              <h2 className={style.h2}>crea tu propio juego</h2>
            </div>
            <form className={style.form} >
             <ul>

                <li className={style.Nombre}>
                  <label for="name"  className={style.label}>Nombre : </label>
                  <input type="text"  name='nombre'  value={input.nombre} placeholder="nombre del video juego" onChange={e => fn(e)}/>
                </li>

               

                <li className={style.Fecha_de_lanzamiento}>
                  <label for="Fecha_de_lanzamiento"  className={style.label}>Fecha de lanzamiento : </label>
                  <input type="date"  name="Fecha_de_lanzamiento" value={input.Fecha_de_lanzamiento}  placeholder="fecha de lanzamiento" max="2023-00-00" min="1920-00-00" className={style.inputFecha} onChange={e => fn(e)}/>
                </li>

                <li className={style.rating}>
                   <label for="rating"  className={style.label}>rating : </label>
                   <input type="number" name="Rating" value={input.Rating} min="1" max="5" onChange={e => fn(e)}/>
                </li>


                <p className={style.Pgeneros}>generos</p>
                  <select className={style.select} multiple onChange={e => fnSelect2(e)} >
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

                  <div className={style.divli2}>
                    {input.generes.map((element) =>{ 
                     return <li className={style.liGeneres}>{element}</li>
                    })}
                  </div>


                  <p className={style.Pplataformas}>plataformas</p>
                  <select className={style.select2} multiple onChange={ e => fnSelect(e)}>
                   <option value="PC">PC</option>
                   <option value="PlayStation 5">PlayStation 5</option>
                   <option value="PlayStation 4">PlayStation 4</option>
                   <option value="Xbox One">Xbox One</option>
                   <option value="Xbox Series S/X">Xbox Series S/X</option>
                   <option value="Android">Android</option>
                   <option value="iOS">iOS</option>
                   <option value="Xbox 360">Xbox 360</option>
                   <option value="Xbox">Xbox</option>
                   <option value="PlayStation 3">PlayStation 3</option>
                   <option value="PlayStation 2">PlayStation 2</option>
                  </select>
                  
                  <div className={style.divli}>
                    {input.Plataformas.map((element) =>{ 
                     return <li className={style.liPlataformas}>{element}</li>
                    })}
                  </div>

                  <li className={style.imagen}>
                   <label for="img"  className={style.label}>url de imagen : </label>
                   <input type="url" name="imagen_backgrund" value={input.imagen_backgrund}className={style.InputImagen} onChange={e => fn(e)}/>
                  </li>

                  <li className={style.descripcion}>
                  <p className={style.Pdescripcion}>descripcion del videojuego</p>
                   <textarea name="description" value={input.description} className={style.textarea}  onChange={e => fn(e)}></textarea>
                  </li>
              
             </ul>

             {err.nombre && ( <p className={style.Pnombre}>{err.nombre}</p>)}

             {err.description && ( <p  className={style.Pdescription2} >{err.description}</p>)}

             {err.Fecha_de_lanzamiento && ( <p className={style.Pfecha}>{err.Fecha_de_lanzamiento}</p>)}

             {err.Rating && ( <p className={style.Prating}>{err.Rating}</p>)}

             {err.imagen_backgrund && ( <p className={style.imagen_backgrund}>{err.imagen_backgrund}</p>)}

             {err.Plataformas && ( <p className={style.Pplataformas2}>{err.Plataformas}</p>)}

             {err.generes && ( <p className={style.Pgeneros2}>{err.generes}</p>)}
            

         
             
         </form>

   { !err.nombre  && !err.description  && !err.Fecha_de_lanzamiento  && !err.Rating  && !err.imagen_backgrund &&  !err.generes &&  !err.Plataformas &&
   (<button type="submit" className={style.boton} onClick={subirVideojuego}>crear video juego</button>)}           
      
    <img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/12/bugatti-vision-gran-turismo.jpg" className={style.img} />


           

        </div>
    )
}

export default Formulario

