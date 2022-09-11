import style from 'styled-components'

export const StyledBar = style.header`
    height: 40px;
    width: 100%;

    background-color: #1A242D;
    border-bottom: 1px solid #9599A8;

    @media (min-width: 768px) and (max-width: 1150px){
        height: 35px;
    }

    @media (max-width: 767px){
        height: 30px;
    }
`