import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: .8rem;
    border-radius: 1.0rem;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    >svg {
        margin: 0 1.6rem 0 1.6rem;
    }
`;