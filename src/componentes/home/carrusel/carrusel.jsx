import react from 'react'
import style from './carrusel.module.css'


const Carrusel = () => {

    return( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://media.rawg.io/media/games/1af/1af8edc7491c6d9d0776fc423d93548d.jpg" className={style.img} />
            </div>
            <div className="carousel-item">
              <img src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg" className={style.img} />
            </div>
            <div className="carousel-item">
              <img src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg" className={style.img} />
            </div>
 
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
         )
}

export default Carrusel