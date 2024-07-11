import React, { useState, useEffect } from 'react';

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { recipeImages } from '../../assets/ricette/Recipes.js';
import caffe from '../../assets/caffe.webp';
import ciambella from '../../assets/ciambella.webp';
import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
import { 
  CarouselContainer, 
  LazyImageCaffe, 
  LazyImageCiambella, 
  Span, 
  MainTitle,
  Hr,
  P,
  MySwiper,
  ExploreContainer,
  MySwiperSlide,
  Image,
  Title,
  SlideButton,
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
      <LazyImageCaffe src={caffe} alt='' className='caffe' />
      <LazyImageCiambella src={ciambella} alt='' className='ciambella' />
      <div>
        <div>
          <Span>discover</Span>
          <MainTitle className='gradient-text'>Home Recipes</MainTitle>
          <Hr className='carousel-hr' />
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
          },
          1500: {
            slidesPerView: 3,
          },
        }}
      >
        {recipeData.map(({ title, imageCarousel }, index) => {
          return (
            <MySwiperSlide key={index} className='myswiper-slider'>
              <Image src={imageCarousel} alt={"Recipe" + title} />
              <ExploreContainer>
                <Title>{title}</Title>
                <Link to={`/cookbook/${title.toLowerCase()}`}>
                  <SlideButton className='slider-btn'>Explore</SlideButton>
                </Link>
              </ExploreContainer>
            </MySwiperSlide>
          );
        })}
        {showIcon && (
        <OverlayContainer>
          <span className='gradient-text'>SWIPE</span>
          <img src='https://i.ibb.co/8cYKM7n/swipe-icon.png' alt="Icon" />
        </OverlayContainer>
      )}
      </MySwiper>
      
    </CarouselContainer>
  );
}

export default Carousel;



/* <SwiperSlide 
          key={recipeName}
          className='myswiper-slider'
          >
              <img src={require(`../../assets${image}`)} alt={"Recipe" + recipeName} />
              <div>
                <h2>{title}</h2>
                <Link to={`/cookbook/${recipeName}`}>
                  <button className='slider-btn'>Explore</button>
                </Link>
              </div>
          </SwiperSlide>
        )})}
      </Swiper>      
    </div>
  );
}

export default Carousel; */