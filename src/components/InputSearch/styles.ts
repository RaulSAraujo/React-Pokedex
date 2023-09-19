import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
    position:relative;
    margin: 10px 0px 40px;
`

export const InputStyle = styled.input`
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: rgb(242, 242, 242);
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: grey;

    &::placeholder {
        color: #999;
        font-style: italic;
    };

    &:focus {
        border: 2px solid #ede9e8;
        outline: none;
    }
`

export const SearchIcon = styled(FaSearch)`
  color: grey;
  font-size: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;