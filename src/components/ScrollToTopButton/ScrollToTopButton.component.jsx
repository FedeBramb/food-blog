// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

import { Container } from './ScrollToTopButton.styles';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container
      className={`scroll-to-top ${isVisible ? '' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <svg className='arrow' viewBox="0 0 1792 1792"
        width="46"       // Imposta larghezza 46px
        height="46"      // Imposta altezza 46px
        fill="currentColor" // Usa `currentColor` per applicare colore dal CSS
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M1246 876q-8 20-30 20h-192v352q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-352h-192q-14 0-23-9t-9-23q0-12 10-24l319-319q11-9 23-9t23 9l320 320q15 16 7 35zm-350-524q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
        </path>
      </svg>
    </Container>
  );
};

export default ScrollToTopButton;

