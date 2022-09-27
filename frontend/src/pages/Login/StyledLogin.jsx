import styled from 'styled-components'

export const StyledLogin = styled.section`
    height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

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

    
    .login-box{
        padding: 30px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        
        height: auto;
        width: 40%;
        
        background-color: #222;
        border: none;
        border-radius: 20px;
    }

    .login-box > h2{
        font-size: 30px;
        color: white;
    }
    
    .login-box > form{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .login-box > form > input{
        width: 80%;

        font-family: Arial, Helvetica, sans-serif;
        padding: 4px 10px;
        font-weight: 500;
        font-size: 16px;
        color: white;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
    }

    .login-box > form > input[type="button"]{
        width: 50%;
        margin-top: 20px;
        padding: 8px 10px;

        font-weight: 700;
        font-size: 16px;

        background-color: #E81538;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    .login-box > .problems{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .login-box > .problems > p{
        font-size: 12px;
        color: #E81538;
        transform: translateY(-10px);
        cursor: pointer;
    }

    .login-box > .problems > p > span{
        font-weight: 700;
        color: #E81538;
    }

    .login-box > .problems > p > span:hover{
        text-shadow: 0 0 5px #E81538;
    }

    .login-box > .problems > p:hover{
    }

    @media (max-width: 767px){
        .login-box{
            width: 70%;
            height: 50%;
            padding: 0 20px;
            justify-content: center;
            gap: 20px;
        }

        .login-box > h2{
            font-size: 24px;
            text-align: center;
        }

        .login-box > form > input{
            width: 90%;
            font-size: 12px;
        }

        .login-box > form > input[type="button"]{
            margin-top: 10px;
            width: 45%;
        }

        .login-box > .problems > p{
            font-size: 10px;
        }

        .login-box > .problems > p:hover{
            text-shadow: 0 0 5px white;
        }
    }
`