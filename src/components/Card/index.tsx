import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ContainerText, ImgPokemon, ImgPokeball, PokemonName, PokemonNumber, ContainerType, PokemonType } from './styles'

interface PokemonTypesProps {
    name: string;
}

interface PokemonProps {
    id: string;
    backgroundColor: string;
    image: string;
    type: PokemonTypesProps[];
}

const backgroundType = {
    bug: '#8BD674',
    dark: '#6F6E78',
    dragon: '#7383B9',
    electric: '#F2CB55',
    fairy: '#EBA8C3',
    fighting: '#EB4971',
    fire: '#FFA756',
    flying: '#83A2E3',
    ghost: '#8571BE',
    grass: '#8BBE8A',
    ground: '#F78551',
    ice: '#91D8DF',
    normal: '#B5B9C4',
    poison: '#9F6E97',
    psychic: '#FF6568',
    rock: '#D4C294',
    steel: '#4C91B2',
    water: '#58ABF6',
};

export const Card: React.FC<{ name: string }> = ({ name }) => {
    const [pokemon, setPokemon] = useState({} as PokemonProps);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                const { id, types, sprites } = response.data;
                console.log(response.data)
                let backgroundColor = types[0].type.name;
                if (backgroundColor === 'normal') {
                    backgroundColor = types[1].type.name;
                }

                setPokemon({
                    id,
                    backgroundColor: backgroundType[backgroundColor],
                    image: sprites.other['official-artwork'].front_default,
                    type: types.map((pokemonType: any) => {
                        console.log(pokemonType)
                        return {
                            name: pokemonType.type.name
                        }
                    }),
                });
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }, [name]);

    return (
        <Container color={pokemon.backgroundColor}>
            <ContainerText>
                <PokemonNumber>#{pokemon.id}</PokemonNumber>
                <PokemonName>{name}</PokemonName>

                <ContainerType>
                    {pokemon.type && (
                        <div>
                            {pokemon.type.map(pokemonType => (
                                <PokemonType key={pokemonType.name}>{pokemonType.name}</PokemonType>
                            ))}
                        </div>
                    )}
                </ContainerType>

                <ImgPokeball />
            </ContainerText>

            <ImgPokemon url={pokemon.image} />
        </Container>
    )
}