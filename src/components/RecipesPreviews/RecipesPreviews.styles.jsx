import styled from "styled-components";

export const PreviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 12px;
    margin: auto;
`

export const Header = styled.div`
    & hr {
        display: block;
        background: #00a4aa;
        height:  0.25rem;
        width: 5.25rem;
        border: none;
        margin-bottom: 3vh;
        margin-left: 0;
    }

    & .margin {
        margin-bottom: 2vh;
    }
`

export const PreviewContainer = styled.div`
    opacity: 50%;
`





