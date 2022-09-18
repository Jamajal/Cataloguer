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
        padding: 30px 40px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        
        background-color: #222;
        border: none;
        border-radius: 20px;
    }

    .login-box > h2{
        color: white;
    }
    
    .login-box > form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .login-box > form > input{
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
        width: 65%;
        margin-top: 10px;
        padding: 5px 10px;

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
        color: #EEE;

        cursor: pointer;
    }

    .login-box > .problems > p:hover{
        text-shadow: 0 0 3px white;
    }
`