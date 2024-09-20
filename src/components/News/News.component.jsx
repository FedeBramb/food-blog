import React from 'react';

import glassa from '../../assets/images-news/glassaSpecchio.webp';
import chefAzi from '../../assets/images-news/chefAzi.webp';
import madeItaly from '../../assets/images-news/madeinitaly.webp';
import streetfood from '../../assets/images-news/streetfood.webp';
import foodprofit from '../../assets/images-news/foodprofit.webp';
import kinder from '../../assets/images-news/kinder.webp';
import gelato from '../../assets/gelato.png';

import {
  NewsContainer,
  NewsTitle,
  ImgContainer,
  OverlayContainer,
  Gelato
} from './News.styles.jsx';

const newsLinks = [
    {
      url: 'https://www.agrodolce.it/ricette/glassa-specchio-colorata',
      image: glassa,
      source: 'AgroDolce'
    },
    {
      url: 'https://reportergourmet.com/it/news/6800-marco-akuzun-lo-chef-stellato-si-ritira-dopo-20-anni-rivoglio-la-mia-vita-privata',
      image: chefAzi,
      source: 'Reporter Gourmet'
    },
    {
      url: 'https://www.foodweb.it/2024/04/giornata-made-in-italy-coldiretti-cibo-prima-ricchezza-del-paese/',
      image: madeItaly,
      source: 'Reporter Gourmet'
    },
    {
      url: 'https://www.messinatoday.it/eventi/weekend/cosa-fare-messina-weekend-3-5-maggio-2024.html',
      image: streetfood,
      source: 'TodayBlog'
    },
    {
      url: 'https://www.ilcarmagnolese.it/il-docu-film-food-for-profit-al-cinema-elios-di-carmagnola/',
      image: foodprofit,
      source: 'Food Profit'
    },
    {
      url: 'https://www.theguardian.com/food/2024/may/02/unethical-junk-food-packaging-manipulates-children-into-craving-sweets-report-claims',
      image: kinder,
      source: 'The Guardian'
    }
];

const News = () => {
  return (
    <NewsContainer id='shorterDiv'>
      <NewsTitle>
          <h2 className='gradient-text'>News</h2>
          <hr className='hr-blue' />
      </NewsTitle>
      {newsLinks.map((news, index) => (
          <a href={news.url} className="image-link" key={index}>
            <ImgContainer>
                <img src={news.image} alt={`immagine per ${news.source}`} className="news-image" width='279' height='156'/>
                <OverlayContainer>
                  <span className='overText'>{news.source}</span>
                </OverlayContainer>
            </ImgContainer>
          </a>
      ))}
      <Gelato src={gelato} alt='macarons' />
    </NewsContainer>
  )
}

export default News;