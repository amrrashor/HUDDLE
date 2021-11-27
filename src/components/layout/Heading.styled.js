import styled from "styled-components";

export const Heading = styled.h2`
    font-weight:bold;
    font-size:2rem;
    text-transform:uppercase;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size:1.1rem;
    }
`