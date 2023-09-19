import { Container, InputStyle, SearchIcon } from './style'

export const InputSearch = () => {
    return (
        <Container>
            <SearchIcon />
            <InputStyle type="text" placeholder="Qual pokémon você está procurando ?" />
        </Container>
    )
}