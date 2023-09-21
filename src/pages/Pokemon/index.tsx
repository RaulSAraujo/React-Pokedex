import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {
    Container,
    GoBack,
    ContainerName,
    StyledName,
    ContainerDetails,
    ContainerPokemon,
    ImgPokemon,
    ContainerText,
    PokemonName,
    PokemonNumber,
    ContainerType,
    PokemonType,
    ContainerMenu
} from './style.ts'
import { FaChevronLeft } from 'react-icons/fa';

interface PokemonTypesProps {
    name: string;
    color: string;
}

export interface PokemonProps {
    id: number;
    number: string;
    image: string;
    specie: string;
    height: string;
    weight: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        specialAttack: number;
        specialDefense: number;
    };
    type: PokemonTypesProps[];
}

export const Pokemon = () => {
    const params = useParams();
    const { name } = params

    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const [backgroundColor, setBackgroundColor] = useState('normal');

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


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
            const {
                id,
                weight,
                height,
                stats,
                sprites,
                types,
                species,
            } = response.data;

            setBackgroundColor(types[0].type.name);

            if (types[0].type.name === 'normal' && types.length > 1) {
                setBackgroundColor(types[1].type.name);
            }

            setPokemon({
                id,
                number: `#${'000'.substr(id.toString().length)}${id}`,
                image: sprites.other['official-artwork'].front_default || sprites.front_default,
                weight: `${weight / 10} kg`,
                specie: species.name,
                height: `${height / 10} m`,
                stats: {
                    hp: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    specialAttack: stats[3].base_stat,
                    specialDefense: stats[4].base_stat,
                    speed: stats[5].base_stat,
                },
                type: types.map((pokemonType: any) => {
                    return {
                        name: pokemonType.type.name,
                        color: background[pokemonType.type.name]
                    }
                }),
            });
        });
    }, [name]);


    return (
        <Container backgroundColor={backgroundType[backgroundColor]}>
            <GoBack to="/">
                <FaChevronLeft size={50} />
            </GoBack>

            <ContainerName>
                <StyledName color={backgroundType[backgroundColor]}>
                    {name}
                </StyledName>
            </ContainerName>

            <ContainerDetails>
                <ContainerPokemon>
                    <ImgPokemon url={pokemon.image} />
                    <ContainerText>
                        <PokemonNumber>{pokemon.number}</PokemonNumber>
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
                    </ContainerText>
                </ContainerPokemon>
            </ContainerDetails>

            <ContainerMenu>
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</span>
            </ContainerMenu>
        </Container>
    )
}