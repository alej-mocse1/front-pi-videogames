// Importa las action types acá
import { GET_ALL_VIDEOGAMES ,
         GET_VIDEOGAME_ID , 
         GET_SEARCHVIDEOGAMES , 
         FILTER_X_GENERE , 
         FILTER_X_CREATE , 
         ORDENAR_AZ  ,
         ORDENAR_ZA ,
         ORDENAR_ASCENDENTE ,
         ORDENAR_DESCENDENTE ,
         LIMPIAR_STATE } from '../actions/actions.js'


const initialState = {
  totalVideogames:[],
  videogames: [],
  videogamesid:{},
  searchVideoGames:[]
};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
   
    case GET_ALL_VIDEOGAMES:{
      return{
        ...state,
        videogames : action.payload,
        totalVideogames: action.payload,
      }
    }

    case GET_VIDEOGAME_ID:{
      return{
        ...state,
        videogamesid : action.payload
      }
    } 

    case GET_SEARCHVIDEOGAMES:{
      return{
        ...state,
        searchVideoGames : action.payload
      }
    }

    case LIMPIAR_STATE:{
      return{
        ...state,
        searchVideoGames: [],
        videogamesid: {}
      }
    }

    case FILTER_X_GENERE:{
      const allVideogames = state.totalVideogames;
      const VideogamesFilter = allVideogames.filter(Element => Element.genres.includes(action.payload))
      return{
        ...state,
        videogames:VideogamesFilter      
      }
    }
 
    case FILTER_X_CREATE:{
      const allVideogames = state.totalVideogames;
      const VideogamesFilter = allVideogames.filter(Element => Element.filtrado === action.payload)
      return{
        ...state,
        videogames:VideogamesFilter
      }
    }

    case ORDENAR_AZ:{
      
      const ordenarAZ = [...state.videogames]

      const ordenamiento = ordenarAZ.sort((a,b) => {
        //el valor A va antes que el B ya que B es mayor(negativo significa que el valor A va antes que B)
        if(a.nombre < b.nombre)return -1
        
         //el valor B va antes que el A ya que A es mayor(positivo significa que el valor B va antes que A)
        if(a.nombre > b.nombre)return 1
  
        //deja todo igual
        return 0
  
        })

      return{
        ...state,
        videogames: [...ordenamiento, 1],
      }
    }
    
    case ORDENAR_ZA:{
      const ordenarZA = [...state.videogames]
      const ordenamiento = ordenarZA.sort((a,b) => {
         
       //el valor A va antes que el B ya que A es mayor(negativo significa que el valor A va antes que B)
        if(a.nombre > b.nombre) return -1

       //el valor B va antes que el A ya que B es mayor(positivo significa que el valor B va antes que A)
        if(a.nombre < b.nombre)return 1

      //deja todo igual
        return 0
      })
      return{
        ...state,
        videogames: [...ordenamiento, 1],
      }
    }

    case ORDENAR_ASCENDENTE:{
      const ordenarAscendente = [...state.videogames]
      const ordenamiento = ordenarAscendente.sort((a,b)=>{
       
        
        if(a.rating < b.rating)return -1


        if(a.rating > b.rating)return 1


        return 0
      })
      return{
        ...state,
        videogames: [...ordenamiento,1] 
      }
    }

    case ORDENAR_DESCENDENTE:{
      const ordenarAscendente = [...state.videogames]
      const ordenamiento = ordenarAscendente.sort((a,b)=>{
       
        
        if(a.rating > b.rating)return -1


        if(a.rating < b.rating)return 1


        return 0
      })
      return{
        ...state,
        videogames: [...ordenamiento,1] 
      }
    }
  }
  return{...state};
};

export default rootReducer;