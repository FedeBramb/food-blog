import styled from "styled-components"

export const StarRatingContainer = styled.div`
    color: #ccc;
    font-size: 30px;
    margin-bottom: 20px;
`

export const StarSpan = styled.span`
    cursor: pointer;
    padding: 0 2px;

    &.active {
        color: #00a4aa;
    }
`