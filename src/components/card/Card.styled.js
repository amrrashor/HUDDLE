import styled from "styled-components";

export const StyledCard = styled.div`
    display:flex;
    align-items:center;
    background-color: ${({ bg }) => bg || "#fff"};
    border-radius:15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 30px 15px;
    padding:30px;
    flex-direction: ${({ layout }) => layout || 'row'};

    img {
        max-width:90%;
        margin:0 10px;
    }

    & > div {
        flex:1;
    }

    @media and (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction:column;
    }
`