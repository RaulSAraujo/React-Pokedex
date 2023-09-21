import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;

    ${({ backgroundColor }) => css`
      background-color: ${backgroundColor}; 
    `};
`

export const GoBack = styled(Link)`
  position: fixed;
  top: 6vw;
  left: 1vw;
  z-index: 10;

  display: flex;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerName = styled.div`
    width: 80vw;
    height: 30vh;
    margin: 0 auto;
`

export const StyledName = styled.h1<{ color?: string }>`
    font-weight: bold;
    font-size: 12vw;
    text-align: center;
    text-transform: uppercase;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.09) 60%
    );
    background-clip: border-box;
    -webkit-text-stroke: 4px transparent;
    -webkit-background-clip: text;
    ${({ color }) => css`
        color: ${color}; 
    `};
`

export const ContainerDetails = styled.div`
width: 80vw;
height: 40vh;
margin: 0 auto;
display: flex;
`

export const ContainerPokemon = styled.div`
width: 40vw;
height: 300px;
margin: -130px auto 50px auto;
display: flex;
justify-content:center;
align-items: center;
`

export const ImgPokemon = styled.image<{ url?: string }>`
    background-repeat: no-repeat;
    background-size: 100px;
    background-size: contain;
    height: 350px;
    width: 350px;

    ${({ url }) => css`
        background-image: url(${url});
    `};
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    position: relative;
    margin-left: 30px;
`

export const PokemonName = styled.p`
    font-weight: bold;
    font-size: 60px;
    line-height: 65px;
    text-transform: capitalize;
    color: white;
`;

export const PokemonNumber = styled.p`
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 2px;
    line-height: 32px;
    color: black;
`;

export const ContainerType = styled.div<{ color?: string }>`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 14px;

`

export const PokemonType = styled.span`
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;

  ${({ color }) => css`
    background-color: ${color}; 
  `};
`;

export const ContainerMenu = styled.div`
    height: 30vh;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
    padding: 40px;
`