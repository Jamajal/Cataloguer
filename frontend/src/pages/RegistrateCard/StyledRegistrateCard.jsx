import styled from 'styled-components'

export const StyledRegistrateCard = styled.section`
    height: 100vh;
    position: relative;

    display: flex; 
    justify-content: center;
    align-items: center;

    > a{
        position: absolute;
        top: 20px;
        left: 20px
    }

    > a > button{
        padding: 5px 20px;

        font-size: 16px;
        font-weight: 700;

        color: white;
        background-color: transparent;
        border: 2px solid white;
        border-radius: 10px;
        cursor: pointer;
    }

    .cadastrate-card-box{
        
        padding: 30px;
        background-color: #222;
        border-radius: 20px;
    }


    .cadastrate-card-box > form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .cadastrate-card-box > form > input,
    .cadastrate-card-box > form > select
    {
        padding: 5px 10px;

        font-size: 14px;
        border:none;
        border-bottom: 1px solid white;
        background: transparent;
        color: white;
        
    }

    .cadastrate-card-box > form > select > option{
        font-size: 12px;
        background: #222;
    }
    
    .cadastrate-card-box > form > input[type="submit"]{
        font-size: 16px;
        font-weight: 700;

        border: 1px solid white;
        background-color: transparent;
        border-radius: 10px;

        cursor: pointer;
    }

    .squares{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .squares > span{
        color: #DDDDDD;
        font-size: 30px;
    }

    .square{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
    }

    .square-number-controls{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .square-number-controls > button{
        width: 40%;
        padding: 5px 0;

        font-size: 16px;
        font-weight: 700;
        color: white;
        border: 1px solid white;
        background-color: transparent;
        border-radius: 10px;
        cursor: pointer;

        transition-duration: 0.5;
    }

    .square-number-controls > button:hover,
    .cadastrate-card-box > form > input[type="submit"]:hover
    {
        box-shadow: 0 0 5px white;
    }

    @media (max-width: 767px){
        .cadastrate-card-box{
            width: 340px;
        }

        .squares{
            gap: 10px;
        }

        .square{
            width: 20px;
            height: 20px;
            border-radius: 4px;
        }

        .square-number-controls > button,
        .cadastrate-card-box > form > input[type="submit"]
        {
            font-size: 14px;
        }
    }
`