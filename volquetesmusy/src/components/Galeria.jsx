import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PrecioVolquetes from "../images/precioVolquetes.jpeg";
import PrecioVolquetes2 from "../images/precioVolquetes2.jpeg";
import PrecioVolquetes4 from "../images/camion4.jpeg";
import "@splidejs/react-splide"

const Galeria = () => {
  return (
    <div className='galeria-cont'>
        <h2>Galería</h2>
        <Splide aria-label="Carrusel de imagenes" options={{
          type:"loop",
          autoplay:true,
        }}>
            <SplideSlide>
           <picture>
           <img src={PrecioVolquetes} alt="Camion de volquetes "  className='imgVolquete'/>
           </picture>
            </SplideSlide>
            <SplideSlide>
           <picture>
           <img src={PrecioVolquetes2} alt="Camion de volquetes2 " className='imgVolquete' />
           </picture>
            </SplideSlide>
            <SplideSlide>
           <picture>
           <img src={PrecioVolquetes4} alt="Camion de volquetes3 " className='imgVolquete'/>
           </picture>
            </SplideSlide>
        </Splide>

    </div>
  )
}

export default Galeria