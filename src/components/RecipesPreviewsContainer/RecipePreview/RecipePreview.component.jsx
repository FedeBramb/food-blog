import { useRef }from 'react';

import { Link } from 'react-router-dom';

import { useScroll, useTransform, useSpring } from "framer-motion";

import {
    Splash,
    PreviewContainer,
    NewsLink,
    LazyImg,
    DetailsContainer,
    ReadButton
} from './RecipePreview.styles.jsx';

const RecipePreview = ({ recipe }) => {
    const { title, images_square, description, id } = recipe; 

    const ref = useRef();

    // Inizia quando la parte superiore del target si allinea con la 
    //   parte superiore della viewport.
    // Termina quando la parte inferiore (end) dell'elemento target 
    //   si allinea con la parte superiore (start) della viewport.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 1
    });
    
    const xPreview = useTransform(smoothScrollYProgress, [0, 0.8], ["-100%", "0%"]);

    return (
            <PreviewContainer key={`section-${id}`} ref={ref} style={{ x: xPreview }} >
                <Splash>
                    <NewsLink to={`/recipes/${id}`} aria-label={`Link to ${title}`}>
                        <LazyImg key={`${title}-${id}`} src={images_square} alt={`pic-${title}`} />
                    </NewsLink>
                </Splash>
                <DetailsContainer>
                    <span className='date'>8 Luglio, 2024</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={`/recipes/${id}`}>
                        <ReadButton className="span-link">LEGGI LA RICETTA</ReadButton>
                    </Link>
                </DetailsContainer>
            </PreviewContainer>
        
    );
}

export default RecipePreview;
