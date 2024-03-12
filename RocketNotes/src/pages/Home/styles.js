import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25.0rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
    ;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
    grid-area: brand;
    background: blue;
`;
export const Menu = styled.ul`
    grid-area: menu;
    background: yellow;
`;
export const Search = styled.div`
    grid-area: search;
    background: green;
`;
export const Content = styled.div`
    grid-area: content;
    background: pink;
`;
export const NewNote = styled.button`
    grid-area: newnote;
    background: white;
`;