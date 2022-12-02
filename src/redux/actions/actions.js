export const GET_ALL_VIDEOGAMES= "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_ID = 'GET_VIDEOGAME_ID';
export const GET_SEARCHVIDEOGAMES = 'GET_SEARCHVIDEOGAMES';
export const FILTER_X_GENERE = 'FILTER_X_GENERE';
export const FILTER_X_CREATE = 'FILTER_X_CREATE';
export const ORDENAR_AZ = 'ORDENAR_AZ';
export const ORDENAR_ZA = 'ORDENAR_ZA';
export const ORDENAR_ASCENDENTE = 'ORDENAR_ASCENDENTE';
export const ORDENAR_DESCENDENTE = 'ORDENAR_DESCENDENTE';
export const LIMPIAR_STATE = 'LIMPIAR_STATE'



export const getVideoGames = () => { 
    return function(dispatch) {
           return fetch("https://back-pivideogames-production.up.railway.app/videogames")
               .then(response => response.json())
               .then(data => dispatch({ type: GET_ALL_VIDEOGAMES , payload: data }))
           };
};

export const getVideoGamesid = (id) => { 
    return function(dispatch) {
        return fetch(`https://back-pivideogames-production.up.railway.app/videogames/${id}`)
            .then(response => response.json())
            .then(data => dispatch({ type: GET_VIDEOGAME_ID , payload: data }))
        };

};

export const getSearchVideoGames15 = (name) => { 
    return function(dispatch) {
        return fetch(`https://back-pivideogames-production.up.railway.app/videogames?search=${name}`)
            .then(response => response.json())
            .then(data => dispatch({ type: GET_SEARCHVIDEOGAMES , payload: data }))
        };

};


export const filtrarXgenero = (data) => { 
     return { type: FILTER_X_GENERE , payload: data }
};


export const filtrarXcreacion = (data) => { 
    return{ type: FILTER_X_CREATE, payload: data }
};


export const ordenarAZ = () => { 
    return{ type: ORDENAR_AZ }
};


export const ordenarZA = () => { 
    return{ type: ORDENAR_ZA}
};


export const ordenarAscendente = () => {
    return{ type: ORDENAR_ASCENDENTE }
}


export const ordenarDescendente = () => {
    return{ type: ORDENAR_DESCENDENTE }
}


export const limpiarState = () => {
    return{ type: LIMPIAR_STATE }
}



