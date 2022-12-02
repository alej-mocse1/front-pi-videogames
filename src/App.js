import './App.css';
import { Route } from 'react-router-dom';

import Home from './componentes/home/home';
import Navbar from './componentes/navbar/navbar';
import Formulario from './componentes/formulario/formulario';
import VideoGameId from './componentes/videogameId/videogameId';
import PaginaInicial from "./componentes/PaginaInicial/paginaincial";
import SearchVideoGame15 from './componentes/SeacrhVideogames15/SearchVideoGames15';
import Contactanos from './componentes/contactanos/contactanos'

import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.baseURL = 'https://back-pivideogames-production.up.railway.app/';




function App() {
  return (
    <div className='div'>

    <Route exact path='/' component={PaginaInicial} />

    <Route path='/paginaPrincipal' component={Navbar} />

    <Route exact path='/paginaPrincipal' component={Home} />

    <Route exact path='/paginaPrincipal/:id' component={VideoGameId} />

    <Route exact path='/paginaPrincipal/filtrados/:id' component={SearchVideoGame15} />

    <Route exact path='/crearVideojuego' component={Navbar} />

    <Route exact path='/crearVideojuego' component={Formulario} />

    <Route exact path='/contactanos' component={Navbar} />

    <Route exact path='/contactanos' component={Contactanos} />

    </div>
  );
}

export default App;
