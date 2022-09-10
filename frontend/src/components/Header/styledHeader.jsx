import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding-bottom: 20px;
    width: 100%;
    .selects{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 40px;
    }

    .selects > select{
        width: 25%;
        padding: 5px 10px;

        font-weight: 300;
        font-size: 16px;

        color: #9599A8;
        background-color: #1A242D;

        border: solid 1px #9599A8;
        border-radius: 10px;
    }
`