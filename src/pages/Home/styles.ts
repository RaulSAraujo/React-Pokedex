import styled from "styled-components";

import Pokeball from '../../assets/pokeball.svg';

export const Container = styled.div`
    height: 100vh;
    padding: 30px 80px;
`;

export const Svg = styled.img`
    width: 90%;
    height: 90%;
    position: absolute;
    background-image: url(${Pokeball});
    background-repeat: no-repeat;
    background-size: 90vh;
    background-position: center;
    filter: opacity(0.03)
    
`;

export const Header = styled.header`
    font-size: 50px;
    font-weight: bold;
`

export const ContainerListCard = styled.div`
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
`
