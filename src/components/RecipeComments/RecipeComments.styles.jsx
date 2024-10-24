import styled from "styled-components";

export const RecipeCommentsContainer = styled.div`
    width: 65vw;
    margin-top: 10vh;
    margin-bottom: 1.3rem;

    .line {
        margin-bottom: 1.5rem;
    }

    & label {
        display: block;
        font-size: 1.2rem;
        color: var(--comment-color);
    }

    @media (max-width: 780px) {
        width: 100%;
    }
`

export const AllCommentsTitle = styled.h2`
    background-color: var(--hover-input);
    background-image: linear-gradient(45deg, #00a4aa, #00073b);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const CommentBox = styled.div`
    margin-bottom: 0.7rem;
`

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 0.7rem;
`

export const CommentInput = styled.textarea`
    width: 25vw;
    min-width: 270px;
    height: 10vh;
    font-size: 1.1rem;
    resize: none;
    margin-top: 0.7rem;

    &::placeholder {
        color: #498082; 
        font-size: 14px; 
    }
    &:focus {
        outline: none; /* Rimuove il bordo predefinito */
        border: 2px solid var(--comment-color);
    }
`