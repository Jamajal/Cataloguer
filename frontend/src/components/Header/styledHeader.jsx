import styled from 'styled-components'
/* 
export const StyledHeader = styled.header`
    padding: 20px;
    width: 100%;

    .filter{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .selects{
        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 30px;
    }

    .selects > select{
        width: 25%;
        padding: 5px 10px;

        font-weight: 300;
        font-size: 16px;

        color: #9599A8;
        background-color: #1A242D;

        border: solid 1px #9599A8;
        border-radius: 10px;
    }

    .filter-button-box{
        width: 30%;
        display: flex;
        justify-content: center;
    }
    
    @media (min-width: 768px) and (max-width: 1150px){
        .selects{
            width: 100%;
            gap: 20px;
        }
        
        .selects > select{
            padding: 3px 5px;

            font-size: 12px;

            border-radius: 7px;
        }
    }
    
    @media (max-width: 767px){
        padding-bottom: 10px;

        .selects{
            width: 100%;
            justify-content: center;
            gap: 20px;
        }
        
        .selects > select{
            width: auto;
            padding: 3px 5px;
            
            font-size: 8.5px;

            border-radius: 4px;
        }

        .filter-button-header{
            width: 70%;
        }
    }   
`
 */
export const StyledHeader = styled.header`
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
    width: 100%;

    .filter{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .selects{
        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 40px;
    }

    .selects > select{
        width: 25%;
        padding: 5px 10px;

        font-weight: 300;
        font-size: 16px;

        color: #9599A8;
        background-color: #1A242D;

        border: solid 1px #9599A8;
        border-radius: 10px;
    }
    
    @media (min-width: 768px) and (max-width: 1150px){
        .selects{
            width: 100%;
            gap: 20px;
        }
        
        .selects > select{
            padding: 3px 5px;

            font-size: 12px;

            border-radius: 7px;
        }
    }
    
    @media (max-width: 767px){
        padding-bottom: 10px;

        .selects{
            width: 100%;
            justify-content: center;
            gap: 20px;
        }
        
        .selects > select{
            width: auto;
            padding: 3px 5px;
            
            font-size: 8.5px;

            border-radius: 4px;
        }

        .filter-button-header{
            width: 70%;
        }
    }
    
`