import styled from "styled-components";


export const SearchFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; /* Per rendere la barra di ricerca responsive */
    position: relative;
    margin-top: 5px;
    height: 38px;
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 17.5rem;
    
    &.visible {
        opacity: 1;
        border: 1px solid #8c8c8c;
    }

    @media screen and (max-width: 768px) {
        width: 12rem;
    }
`

// Utilizza sia opacity che visibility per utilizzare la transition
export const SearchInput = styled.input`
    flex: 1;
    font-size: 16px; 
    max-width: 400px; 
    background-color: var(--primary);
    border: 2px solid var(--primary);
    border-bottom: none; 
    visibility: hidden;
    opacity: 0;
    color: var(--secondary-color);
    transition: opacity 0.5s ease-in-out;

    &.visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }

    &:focus {
        outline: none; 
        border: 2px solid var(--primary);
    }

    &::-webkit-input-placeholder {
        color: #8c8c8c;
    }

    &:-moz-placeholder {
        color: #8c8c8c;  
    }


    @media screen and (max-width: 600px) {
        width: 100%; /* Occupa tutto lo spazio disponibile su schermi più piccoli */
        margin-right: 0; /* Rimuove il margine destro */
    }
`
  
export const SearchButton = styled.div`
    padding: 5px 10px;
    background-color: var(--primary);
    border: none;
    cursor: pointer;

    & i {
        color: #323232;
    }
`

export const ResultDropdown = styled.div`
    position: absolute; 
    top: 100%; 
    left: 0;
    width: 100%; 
    background-color: white;
    border: 1px solid #ccc;
    z-index: 1000; 
`

export const DropdownItemContainer = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 1rem; /* Dimensione del font relativa */
    
    &:hover {
        background-color: #94adc4;
        color: white;
    }

    & p {
        margin: 0;
        font-size: 1rem; /* Dimensione del font relativa */
        text-decoration: none;
    }

    &  a {
        text-decoration: none; /* Rimuove la sottolineatura dai link */
        color: inherit; /* Mantiene il colore del testo del link */
    } 
`