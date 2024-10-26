import styled from "styled-components";

export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #9AB973; /* Colore Verde Salvia */
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border: none;
    outline: none;
    z-index: 1000;
    transition: opacity 0.3s;
    
    &:hover {
        background-color: #7A9B6F;
    }

    &.hidden {
        opacity: 0;
        pointer-events: none;
    }
`