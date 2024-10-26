import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.556);
    cursor: pointer;
    z-index: 1000;
    transition: opacity 0.3s;
    
    &.hidden {
        opacity: 0;
        pointer-events: none;
    }

    .arrow {
        color: #0078ab;

        &:hover {
            color: #174970; 
        }
    }

`