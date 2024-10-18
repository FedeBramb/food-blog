import styled from "styled-components";

export const PreviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap:  0.75rem;

    @media screen and (max-width: 738px) {
        align-items: center;
    }

    &.div-hr  {
        width: 100%;
    }

    &.hr {
        margin-left: 0;
    }
`

export const Header = styled.div`
    
    & .margin {
        margin-bottom: 2%;
    }
`




