import { Container, InputStyle, SearchIcon } from './styles'

interface InputSearchProps {
    value: string;
    onChange(value: string): void;
  }
  

export const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
    return (
        <Container>
            <SearchIcon />
            <InputStyle type="text" placeholder="Qual pokémon você está procurando ?" value={value}  onChange={e => onChange(e.target.value)} />
        </Container>
    )
}