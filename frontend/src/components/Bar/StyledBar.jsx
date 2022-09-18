import style from 'styled-components'

export const StyledBar = style.header`
    height: 40px;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    padding: 20px 50px 20px 0;

    font-family: Arial, Helvetica, sans-serif;

    background-color: #1A242D;
    border-bottom: 1px solid #9599A8;

    > a{
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        color: white;

        cursor: pointer
    }

    > a: hover{
        text-shadow: 0 0 5px white;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        height: 35px;
    }

    @media (max-width: 767px){
        height: 30px;
    }
`