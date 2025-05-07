import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import carrusel from '../db/carrusel';

export default function Hero() {
  useEffect(() => {
    new Splide('.splide', {
      type: 'loop',
      rewind:true,
      perPage: 1,
      heightRatio: 0.5,
      cover: true,
      width: '100%',
      height: '25rem',
      autoplay: true,    
      interval: 2000,
      pauseOnHover: false,
        pagination: false,

      breakpoints: {
        640: {
          perPage:1,
        }
      }
    }).mount();
  }, []);
  return (
    <>
      <section className="splide w-2xl h-auto mx-auto pt-10" aria-labelledby="carousel-heading">
        <div className="splide__track">
          <ul className="splide__list">
            {carrusel.map((item, index) => (
              <li className="splide__slide w-full h-full cover object-cover" key={index}>
                <img src={item.imagen} alt={item.title} />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
