import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (max-width: 780px) {
        gap: 1rem;
    }

`
export const Label = styled.label`
    cursor: pointer;
    border: 1px solid var(--hover-input);
    border-radius: 0.5rem;
    text-align: center;
    background-color: whitesmoke;
    
    &:hover {
        background-color: #1a5c8fa2;
        color: whitesmoke;
    }
`
export const Input = styled.input`
    display: none;
`

export const Button = styled.button`
    border: 1px solid var(--hover-input);
    border-radius: 0.5rem;
    background-color: whitesmoke;
    font-size: 0.95rem;

    &:hover {
        background-color: #1a5c8fa2;
        color: white;
    }
`

export const Avatar = styled.img`
    width: 200px;
    height: auto;
`

export const SuccessMessage = styled.div`
  margin-top: 10px;
  color: green;
  font-size: 14px;
`;
