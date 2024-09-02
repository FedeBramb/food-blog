import styled from "styled-components";

const mainColor = "#00a4aa";

export const SearchFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; /* Per rendere la barra di ricerca responsive */
    position: relative;
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
`

export const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px; 
    max-width: 400px; 
    background-color: ${mainColor};
    border: 2px solid ${mainColor};

    &:focus {
        outline: none; 
        border: 2px solid ${mainColor};
    }

    &::-webkit-input-placeholder {
        color: #323232;
    }

    &:-moz-placeholder {
        color: #323232;  
    }

    @media screen and (max-width: 600px) {
        width: 100%; /* Occupa tutto lo spazio disponibile su schermi più piccoli */
        margin-right: 0; /* Rimuove il margine destro */
    }
`
  
export const SearchButton = styled.div`
    padding: 10px 20px;
    background-color: ${mainColor};
    border: none;
    cursor: pointer;

    & .search-icon {
        width: 25px;
        height: 25px;
    }

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
        background-color: rgba(0, 164, 170, 0.3);
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