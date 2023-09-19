import { InputSearch } from '../../components/InputSearch';
import { Container, Header } from './styles';
import * as Styled from './styles';

export const Home = () => {
    return (
        <Container>
            <Header>
                <span>Pokédex</span>
            </Header>

            <InputSearch />

            <Styled.Wrapper background="green">
                <span>test</span>
            </Styled.Wrapper>
        </Container>
    )
}