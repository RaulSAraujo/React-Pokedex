import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card';
import { InputSearch } from '../../components/InputSearch';
import { Container, Header, ContainerListCard, Svg, ContainerButton, ButtonMore } from './styles';

interface PokemonProps {
    id: string;
    name: string;
}

export const Home = () => {
    const NUMBER_POKEMONS = 9;

    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    const [pokemonSearch, setPokemonSearch] = useState('');
    const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

    const handlePokemonsListDefault = useCallback(async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
            params: {
                limit: NUMBER_POKEMONS,
            },
        });
        setPokemons(response.data.results);
    }, []);

    const handleSearchPokemons = useCallback(async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=750`);

        setPokemonSearch(pokemonSearch.toLocaleLowerCase());

        const pokemonsSearch = response.data.results.filter(
            ({ name }: PokemonProps) => name.includes(pokemonSearch),
        );
        setPokemons(pokemonsSearch);
    }, [pokemonSearch]);

    const handleMorePokemons = useCallback(
        async (offset: any) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
                params: {
                    limit: NUMBER_POKEMONS,
                    offset,
                },
            });

            setPokemons(state => [...state, ...response.data.results]);
            setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
        },
        [NUMBER_POKEMONS],
    );

    useEffect(() => {
        const isSearch = pokemonSearch.length >= 2;

        if (isSearch) handleSearchPokemons();
        else handlePokemonsListDefault();
    }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);


    return (
        <Container>
            <Svg />

            <Header>
                <span>Pokédex</span>
            </Header>

            <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />

            <ContainerListCard>
                {pokemons.map(pokemon => (
                    <Card key={pokemon.name} name={pokemon.name} />
                ))}
            </ContainerListCard>

            <ContainerButton>
                {pokemonSearch.length <= 2 && (
                    <ButtonMore
                        type="button"
                        onClick={() => handleMorePokemons(pokemonsOffsetApi)}
                    >
                        CARREGAR MAIS
                    </ButtonMore>
                )}
            </ContainerButton>
        </Container>
    )
}