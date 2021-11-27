import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 20px;;
`
export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`
export const Logo = styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom:40px;
    }
`
export const Image = styled.img`
    width:375px;
    margin-left:40px;
    margin-top:30px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin:40px 0 30px;
    }
`