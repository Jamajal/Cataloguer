import styled from 'styled-components'

export const StyledCard = styled.div`
    padding: 10px;
    background-color: #1A242D;
    border-radius: 10px;
    width: 100%;

    .name > p{
        font-size: 14px;
        font-weight: 400;
        padding-left: 3px;
        color: white;
    }

    .name > hr{
        margin-top: 2px;
        border-color: #9599A8;
    }

    .card-info{
        margin-top: 10px;

        font-size: 14px;

        color: #9599A8;
    }

    .card-info > p > span{
        font-size: 30px;
    }

    .card-info > .squares{
        margin: 10px 0 20px;
        display: flex;
    }

    .card-info > .squares > .first-part{
        display: flex;
        gap: 7px;
        margin-right: 20px;
    }

    .square{
        width: 25px;
        height: 25px;

        border-radius: 3px;

        background-color: gray;
    }

    > .result{
        display: flex;
        gap: 10px;

        font-size: 16px;
        color: white;
    }
`