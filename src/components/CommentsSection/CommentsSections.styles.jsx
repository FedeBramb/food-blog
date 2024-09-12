import styled from "styled-components";

const mainColor = '#00a4aa';

export const CommentsSectionContainer = styled.div`
    width: 65vw;
    margin-top: 10vh;

    .line {
        margin-bottom: 3vh;
    }

    & label {
        display: block;
        color: ${mainColor};
    }
`

export const AllCommentsTitle = styled.h2`
    background-color: ${mainColor};
    background-image: linear-gradient(45deg, #00a4aa, #00073b);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    .username {
        margin-bottom: 10px;
        font-weight: 700;
        font-style: normal;
        color: #009a93;
    }

    .comment {
        margin-bottom: 10px;
        color: #767676;
    }

    & button {
        background-color: var(--secondary-color); /* Colore di sfondo */
        border: none; /* Rimuovi il bordo */
        border: 2px solid var(--primary-color);
        border-radius: 50%; /* Rende il pulsante tondo */
        width: 30px; /* Dimensione del pulsante */
        height: 30px; /* Dimensione del pulsante */
        display: flex; /* Usato per centrare l'icona */
        align-items: center; /* Centra verticalmente l'icona */
        justify-content: center; /* Centra orizzontalmente l'icona */
        cursor: pointer; /* Cambia il cursore al passaggio sopra */
        transition: background-color 0.3s, transform 0.3s; /* Transizioni per animazioni */
        
        &:hover {
            background-color: #ff4d4d;
        }
    }

    .rating {
        margin-bottom: 2vh;
        color: ${mainColor};
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const CommentInput = styled.input`
    width: 25vw;
    min-width: 270px;
    height: 10vh;

    &::placeholder {
    color: #498082; 
    font-size: 14px; 
    }
`