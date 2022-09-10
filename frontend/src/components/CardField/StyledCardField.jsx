import styled from 'styled-components'

export const StyledCardField = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    overflow: auto;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        width: 0;
    }
`