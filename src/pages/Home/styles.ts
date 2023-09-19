import styled, { css } from "styled-components";

export const Container = styled.div`
    padding: 30px 80px
`;

export const Header = styled.header`
    font-size: 50px;
    font-weight: bold;
`

export const Wrapper = styled.div<{ background?: string }>`
    ${({ background }) => css` background: ${background}; `}
`;