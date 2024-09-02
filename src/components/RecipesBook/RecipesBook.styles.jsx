import styled from "styled-components";

export const RecipeBookContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 78vw;
    justify-items: center;
    gap: 5px;
    margin: 0 auto 4% auto;

    @media screen and (max-width: 738px) {
        grid-template-columns: 1fr;
    }
`
