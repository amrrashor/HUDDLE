import styled from "styled-components";

export const Paragraph = styled.p`
    font-size:1.1rem;
    opacity:0.9;
    color: ${({color}) => color || "#333"};
    line-height:2;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size:0.9rem;
    }
`