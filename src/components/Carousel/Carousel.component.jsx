import React, { useState, useEffect } from 'react';

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import blueberry from '../../assets/bluberry.webp';
import donut from '../../assets/ciambella.webp';

import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
import { 
  CarouselContainer, 
  Blueberry,
  Donut, 
  Span, 
  MainTitle,
  Hr,
  P,
  MySwiper,
  ExploreContainer,
  MySwiperSlide,
  Image,
  Title,
  ExploreButton,
  UnderlayContainer,
} from './Carousel.styles.jsx';


function Carousel() {
  // Ottieni i dati delle immagini delle ricette
  const recipeData = recipeImages();
  
  // Stato per gestire la visibilità dell'icona
  const [showIcon, setShowIcon] = useState(false);

  // Effetto per nascondere l'icona dopo 2 secondi se è visibile
  useEffect(() => {
    let timer;
    if (showIcon) {
      timer = setTimeout(() => {
        setShowIcon(false);
      }, 2000);
    }
    return () => clearTimeout(timer); // Pulizia del timer se il componente viene smontato
  }, [showIcon]);

  // Gestisce l'evento di ingresso del mouse per mostrare l'icona
  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  // Gestisce l'evento di uscita del mouse (l'icona rimarrà visibile finché non scompare automaticamente)
  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  return (
    // Contenitore del carosello con eventi per mostrare/nascondere l'icona
    <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Immagini di overlay */}
      <Blueberry src={blueberry} alt='caffe underlay' />
      <Donut src={donut} alt='ciambella underlay'  />
      
      <div>
        <div>
          <Span>discover</Span>
          <MainTitle className='gradient-text'>Home Recipes</MainTitle>
          <Hr />
          <P>La nostra collezione di ricette gourmet, fatte su misura per te. Provale!</P>
        </div>
      </div>
      
      {/* Componente Swiper per lo slideshow */}
      <MySwiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        loopAddBlankSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          }
        }}
      >
        {/* Mappa dei dati delle ricette e crea uno slide per ogni ricetta */}
        {recipeData.map(({ id, title, imageCarousel }, index) => {
          return (
            <MySwiperSlide key={index} className='myswiper-slider'>
              <Image src={imageCarousel} alt={"Recipe" + title} />
              <ExploreContainer>
                <Title>{title}</Title>
                <Link to={`/cookbook/${id}`}>
                  <ExploreButton className='slider-btn'>Explore</ExploreButton>
                </Link>
              </ExploreContainer>
            </MySwiperSlide>
          );
        })}
        
        {/* Mostra un'icona di overlay se lo stato showIcon è vero */}
        {showIcon && (
        <UnderlayContainer>
          <img src='https://i.ibb.co/PW8zc1V/Swipe-icon.png' alt="Icon" />
        </UnderlayContainer>
      )}
      </MySwiper>
      
    </CarouselContainer>
  );
}

export default Carousel;
