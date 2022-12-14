import styled from 'styled-components'

export const StyledCardField = styled.div`
    width: 90%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 767px){
        flex-direction: row;

        ::-webkit-scrollbar{
            width: 100%;
            height: 5px;
        }
    }
`