import styled from "styled-components";

const textColor = "rgba(51, 51, 51, 0.9)"

export const RecipeContainer = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    margin: auto;

    & .title {
        margin-bottom: 6vh;
    }

    & .title-hr {
        display: block;
        background: #00a4aa;
        height:  0.25rem;
        width: 6.25rem;
        border: none;
        margin: 0.125rem 0 0.875rem 0;
    }

    & .instructions-section {
        margin-top: 10vh;
    }
`

export const VideoSectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Rapporto d'aspetto 16:9 */
    overflow: hidden;
    min-width: 470px;
    min-height: 250px;

    & iframe {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 80%;
}
`

export const IngredientsAndDetails = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    background-color: rgb(232, 232, 232);

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
  
export const IngredientsSection = styled.div`
    min-height: 30vh;
`

export const SectionTitle = styled.h1`    
    margin: 0% 0 5% 0;
    background-color: #00a4aa;
    background-image: linear-gradient(45deg, #00a4aa, #00073b);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
        text-align: center;
    }
`

export const IngredientsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tre colonne di uguale larghezza */
    gap: 1rem; /* Spazio tra gli elementi della griglia */
    margin-bottom: 3%;

    & .ingredients-li {
        color: ${textColor};
    }

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
        margin: auto;
    }
    
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; /* Centra il testo orizzontalmente */
    width: 100%;
    background-color: cornflowerblue;

    & p {
        color: ${textColor};
    }

    @media screen and (max-width: 1100px) {
        width: 100%!important;
        padding-top: 3%;
        padding-bottom: 3%;
    }
`

export const InstructionSection = styled.div`
    & .instructions {
        text-align: justify;

        & li {
            color: ${textColor};
            margin: 20px 0 20px 0;
        }
    }

    & .miniature-rec {
        float: left;
        margin-right: 2%;

        @media screen and (max-width: 800px) {
            margin-bottom: 2vh;
        }
    }

    & p {
        margin-bottom: 20px;
        color: ${textColor};
    }

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`