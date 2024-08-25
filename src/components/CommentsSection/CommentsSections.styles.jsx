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
    background-color: ${mainColor};;
    background-image: linear-gradient(45deg, #00a4aa, #00073b);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const CommentContainer = styled.div`
    .username {
        margin-bottom: 10px;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: #009a93;
    }

    .comment {
        margin-bottom: 10px;
        color: #767676;
    }

    & button {
        margin-bottom: 10px;
    }

    .rating {
        margin-bottom: 2vh;
        color: ${mainColor};
    }
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