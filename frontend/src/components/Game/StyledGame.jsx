import style from 'styled-components'

export const StyledGame = style.div`
    height: 100%;
    width: 100%;

    padding: 10px;
    background-color: #1A242D;

    border-radius: 10px;

    div{
        height: 400px;
        width: 1000px;
        display: flex;
        background-color: black;
    }

    iframe{
        width: 100%;
    }
`