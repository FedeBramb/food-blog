import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 36%;
    height: 65%;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 5px 20px 20px 10px;
    font-family: Arial, sans-serif;
    position: -webkit-sticky;
    position: sticky;
    top: 52.04px;

    @media screen and (max-width: 1100px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 15px;
        padding: 5px 1px 1px 10px;
    }
`

export const Title = styled.h2`
    margin-bottom: 20px;
    color:  #1d6296;

    @media (max-width: 480px) {
        font-size: 20px;
    }
`

export const List = styled.div`
    max-height: 400px;
    overflow-y: auto;
    padding-right: 0.8rem;
`