import styled, { css } from "styled-components";

import Pokeball from '../../assets/pokeball.svg';

export const Container = styled.div<{ color?: string }>`
    position: relative;
    display: flex;
    height: 180px;
    width: inherit;
    border-radius: 6px;
    box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
    transition: all ease 0.5s;

    ${({ color }) => css`
    background: ${color}; 
    `};
`

export const ContainerText = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    padding-left: 30px;
`

export const ImgPokeball = styled.image`
    background-image: url(${Pokeball});
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: center;
    background-size: contain;
    position:absolute;
    right: 5px;
    top: 0px;
    height: 180px;
    width: 180px;
    filter: invert() opacity(0.5);
`

export const ImgPokemon = styled.image<{ url?: string }>`
    background-repeat: no-repeat;
    background-size: 100px;
    background-size: contain;
    position:absolute;
    right: 0px;
    top: -40px;
    height: 200px;
    width: 200px;

    ${({ url }) => css`
        background-image: url(${url});
    `};
`

export const PokemonName = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 45px;
  text-transform: capitalize;
  color: white;
`;

export const PokemonNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
`;

export const ContainerType = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 14px;
`

export const PokemonType = styled.span`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 3px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;