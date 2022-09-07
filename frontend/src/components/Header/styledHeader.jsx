import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bar{
        height: 40px;

        background-color: #1A242D;

        border-bottom: 1px solid #9599A8;
    }

    .filter{
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0px;
    }

    .selects{
        display: flex;
        gap: 45px;
    }

    .selects > select{
        width: 250px;
        padding: 5px 10px;

        font-family: 'Roboto';
        font-weight: 300;
        font-size: 16px;

        color: #9599A8;
        background-color: #1A242D;

        border: solid 1px #9599A8;
        border-radius: 10px;
    }

    .filter > button{
        width: 200px;
        padding: 5px 10px;
        font-weight: 700;
        font-size: 20px;
        color: white;
        background-color: #E81538;
        border-radius: 10px;
        cursor: pointer;
    }
`