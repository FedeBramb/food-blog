import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    min-width: 325px;
    width: 75%;
    
    &.full-width {
        width: 100%;
    }

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
`

export const HeaderComment = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media (max-width: 780px) {
        width: 100%;
    }
`

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 480px) {
        margin-bottom: 10px;
    } 
` 

export const Info = styled.div`
    flex-grow: 1; // Occupa tutto lo spazio disponibile
`

export const Autore = styled.p`
    font-weight: bold;
    margin: 0;
    color: #00bcb3;
`

export const Recipe = styled.span`
    font-size: 14px;
    color: #3c3c3c;
    margin: 0;
`

export const RecipeTitle = styled.span`
    color: #00524e94;
`

export const DateAndRating = styled.div`
     
`

export const Date = styled.p`
    font-size: 12px;
    color: #999;
    margin-bottom: 3px;

    @media (max-width: 480px) {
        margin-top: 5px;
    }
`

export const Rating = styled.span`
    color: var(--comment-color);
`

export const Content = styled.p`
    font-size: 1.1rem;
    letter-spacing: -1px;
    opacity: 80%;
    color: #333;
    margin: 0;
`