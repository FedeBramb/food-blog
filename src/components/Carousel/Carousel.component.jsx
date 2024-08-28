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
  OverlayContainer,
} from './Carousel.styles.jsx';


function Carousel() {
  const recipeData = recipeImages();
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    let timer;
    if (showIcon) {
      timer = setTimeout(() => {
        setShowIcon(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showIcon]);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    // Lasciare l'icona visibile finché non scompare automaticamente
    // setShowIcon(false);
  };

  return (
    <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Blueberry src={blueberry} alt='caffe overlay' />
      <Donut src={donut} alt='ciambella overlay'  />
      <div>
        <div>
          <Span>discover</Span>
          <MainTitle className='gradient-text'>Home Recipes</MainTitle>
          <Hr />
          <P>La nostra collezione di ricette gourmet, fatte su misura per te. Provale!</P>
        </div>
      </div>
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
        {recipeData.map(({ title, imageCarousel }, index) => {
          return (
            <MySwiperSlide key={index} className='myswiper-slider'>
              <Image src={imageCarousel} alt={"Recipe" + title} />
              <ExploreContainer>
                <Title>{title}</Title>
                <Link to={`/cookbook/${title.toLowerCase()}`}>
                  <ExploreButton className='slider-btn'>Explore</ExploreButton>
                </Link>
              </ExploreContainer>
            </MySwiperSlide>
          );
        })}
        {showIcon && (
        <OverlayContainer>
          <img src='https://i.ibb.co/PW8zc1V/Swipe-icon.png' alt="Icon" />
        </OverlayContainer>
      )}
      </MySwiper>
      
    </CarouselContainer>
  );
}

export default Carousel;
