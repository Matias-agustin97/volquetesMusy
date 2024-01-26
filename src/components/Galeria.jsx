import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PrecioVolquetes from "../images/precioVolquetes.jpeg";
import PrecioVolquetes2 from "../images/precioVolquetes2.jpeg";
import PrecioVolquetes4 from "../images/camion4.jpeg";
import PrecioVolqueteMobil1 from "../images/responsive/camion2_430x242.jpg"
import PrecioVolqueteMobil2 from "../images/responsive/camion1_420x315.jpg"
import PrecioVolqueteMobil3 from "../images/responsive/camion3_420x236.jpg"
import "@splidejs/react-splide";
import '@splidejs/splide/css';
import { Container, Typography } from '@mui/material';

const Galeria = React.forwardRef((props,ref) => {
  return (
   <Container>
     <div className='galeria-cont' ref={ref}>
        <Typography textAlign="center" color="primary" fontWeight="600" fontSize="1.5rem">Galeria</Typography>
        <Splide aria-label="Carrusel de imagenes" options={{
          type:"loop",
          autoplay:true,
          lazyLoad:true,
          mediaQuery:"max"
        }}>
            <SplideSlide>
           <picture>
           <source srcSet={PrecioVolqueteMobil1} media='(max-width:600px)'  height="100%"/>
           <img src={PrecioVolquetes} alt="Camion de volquetes "  className='imgVolquete'/>
           
           </picture>
            </SplideSlide>
            <SplideSlide>
           <picture>
           <source srcSet={PrecioVolqueteMobil2} media='(max-width:600px)' height="100%"/>
           <img src={PrecioVolquetes2} alt="Camion de volquetes2 " className='imgVolquete' />
          
           </picture>
            </SplideSlide>
            <SplideSlide>
           <picture>
           <source srcSet={PrecioVolqueteMobil3} media='(max-width:600px)'  height="100%"/>
           <img src={PrecioVolquetes4} alt="Camion de volquetes3 " className='imgVolquete'/>
           
           </picture>
            </SplideSlide>
        </Splide>

    </div>
   </Container>
  )
})

export default Galeria