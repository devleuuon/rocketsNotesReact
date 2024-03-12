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
    
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;
export const Menu = styled.ul`
    grid-area: menu;
`;
export const Search = styled.div`
    grid-area: search
`;
export const Content = styled.div`
    grid-area: conten
`;
export const NewNote = styled.button`
    grid-area: newnote
`;