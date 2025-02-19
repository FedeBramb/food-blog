import React from 'react';
import { motion } from 'framer-motion';

import {
  CustomLink,
  TitleContainer,
  CardContainer,
  PosterContainer,
  PosterLazyImg,
  TitleContent,
  ReadButton
} from './RecipeCard.styles.jsx';

/* Card della ricetta viene mostrata nel route cookbook (ricettario) 
** Leggera animazione scale con framer-motion su container principale  
*/
const RecipeCard = ({ title, image, id }) => {
  return (
    <motion.div animate={{ //
      scale: [0.7, 1],
    }}
    transition={{
      duration: 1
    }}>
      <CustomLink to={`${id}`} className='CustomLink-custom' key={id}>
        <CardContainer>
          <PosterContainer>
            <PosterLazyImg 
              src={image}
              alt={`pic-${id}`}
              className='poster'
            />
          </PosterContainer>
          <TitleContainer>
            <TitleContent>
              <p className='title-card' key={`${id}-p`}>{title}</p>
              <ReadButton>Scopri</ReadButton>  
            </TitleContent>
          </TitleContainer>
        </CardContainer>
      </CustomLink>
    </motion.div>
  )
}

export default RecipeCard;