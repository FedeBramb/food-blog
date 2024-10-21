import styled from "styled-components";

export const Donut = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 80%;
  opacity: 0.3;
  max-height: 367px;
`

export const Container = styled.div`
  width: 30%;
  min-width: 283.1px;
`

export const Title = styled.h1`
  text-transform: capitalize;
  letter-spacing: 0.8px;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-top: 0;
`

export const P = styled.p`
  line-height: 1.6;
  font: 200 normal 1rem "Libre Baskerville", serif;
  opacity: 90%;
  font-size: 1.25rem;
  color: var(--text-primary-color);
`