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
        background-color: var(--secondary-color);
        border: none;
        border: 2px solid var(--primary-color);
        border-radius: 25%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
        
        &:hover {
            background-color: #ff4d4d;
            border: none;
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