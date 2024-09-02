import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 78%;
    height: 100%;
    justify-content: center;
    margin: auto;
    gap: 3%;

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }  
`