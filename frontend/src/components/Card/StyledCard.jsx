import styled from 'styled-components'

export const StyledCard = styled.div`
    padding: 10px;
    background-color: #1A242D;
    border-radius: 10px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
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
    .redSquare{
        width: 25px;
        height: 25px;
        border-radius: 3px;
        background-color: #E81538;
        ;
    }
    .blackSquare{
        width: 25px;
        height: 25px;
        border-radius: 3px;
        background-color: black;
    }
    > .result{
        display: flex;
        gap: 10px;

        font-size: 16px;
        color: white;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        .name > p{
            font-size: 12px;
            padding-left: 3px;
        }

        .card-info{
            margin-top: 7px;

            font-size: 11px;
        }

        .card-info > p > span{
            font-size: 18px;
        }

        .card-info > .squares{
            margin: 8px 0 15px;
        }

        .card-info > .squares > .first-part{
            display: flex;
            gap: 7px;
            margin-right: 15px;
        }

        .square{
            width: 17px;
            height: 17px;
        }

        > .result{
            gap: 8px;
    
            font-size: 14px;
        }
    }

    @media (max-width: 767px){
        .name > p{
            font-size: 10px;
            padding-left: 3px;
        }

        .card-info{
            margin-top: 5px;
    
            font-size: 9px;
        }

        .card-info > p > span{
            font-size: 15px;
        }

        .card-info > .squares{
            margin: 5px 0 10px;
        }

        .card-info > .squares > .first-part{
            display: flex;
            gap: 5px;
            margin-right: 10px;
        }

        .square{
            width: 15px;
            height: 15px;
        }

        > .result{
            gap: 5px;
    
            font-size: 12px;
        }
    }
`