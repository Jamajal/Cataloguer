import styled from 'styled-components'

export const StyledFilterButton = styled.button`
    width: 70%;

    padding: 4px 10px;
    
        
    font-weight: 700;
    font-size: 20px;

    color: white;
    background-color: #E81538;

    border: none;
    border-radius: 10px;

    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1150px){
     
        width: 55%;

        padding: 3px 5px;
            
        font-size: 16px;

        background-color: #E81538;

        border-radius: 7px;
    }

    @media (max-width: 767px){
        width: 40%;

        padding: 3px 5px;
            
        font-size: 12px;

        background-color: #E81538;

        border-radius: 4px;
    }
`