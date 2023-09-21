import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ContainerText, ImgPokemon, ImgPokeball, PokemonName, PokemonNumber, ContainerType, PokemonType } from './styles'


interface PokemonTypesProps {
    name: string;
    color: string;
}

interface PokemonProps {
    id: string;
    backgroundColor: string;
    image: string;
    type: PokemonTypesProps[];
}

const background: Record<string, string> = {
    bug: '#8CB230',
    dark: '#58575F',
    dragon: '#0F6AC0',
    electric: '#EED535',
    fairy: '#ED6EC7',
    fighting: '#D04164',
    fire: '#FD7D24',
    flying: '#748FC9',
    ghost: '#556AAE',
    grass: '#62B957',
    ground: '#DD7748',
    ice: '#61CEC0',
    normal: '#9DA0AA',
    poison: '#A552CC',
    psychic: '#EA5D60',
    rock: '#BAAB82',
    steel: '#417D9A',
    water: '#4A90DA',
}

const backgroundType: Record<string, string> = {
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
                let backgroundColor = types[0].type.name;
                if (backgroundColor === 'normal' && types[1]) {
                    backgroundColor = types[1]?.type.name;
                }

                const color = backgroundType[backgroundColor];
                setPokemon({
                    id,
                    backgroundColor: color,
                    image: sprites.other['official-artwork'].front_default,
                    type: types.map((pokemonType: any) => {
                        return {
                            name: pokemonType.type.name,
                            color: background[pokemonType.type.name]
                        }
                    }),
                });
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }, [name]);

    return (
        <Container to={`pokemon/${name}`} color={pokemon.backgroundColor}>
            <ContainerText>
                <PokemonNumber>#{pokemon.id}</PokemonNumber>
                <PokemonName>{name}</PokemonName>

                <ContainerType>
                    {pokemon.type && (
                        <div>
                            {pokemon.type.map(pokemonType => (
                                <PokemonType key={pokemonType.name} color={pokemonType.color}>{pokemonType.name}</PokemonType>
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