import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;

    .selects{
        display: flex;
        gap: 80px;
    }

    .selects > select{
        width: 250px;
        padding: 5px 10px;

        font-weight: 300;
        font-size: 16px;

        color: #9599A8;
        background-color: #1A242D;

        border: solid 1px #9599A8;
        border-radius: 10px;
    }
`