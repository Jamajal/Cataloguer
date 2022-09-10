import styled from 'styled-components'

export const StyledCataloguer = styled.div`
    width: 100%;
    height: 90vh;

    main{
        padding: 0 20px;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    main > div{
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }

    main > .left-side{
        height: 100%;
        width: 100%;
    }

    main > .right-side{
        align-items: center;
        width: 30%;
    }

    main > .right-side > button{
        width: 70%;

        padding: 5px 10px;
        margin-bottom: 20px;
        
        font-weight: 700;
        font-size: 20px;

        color: white;
        background-color: #E81538;

        border: none;
        border-radius: 10px;

        cursor: pointer;
    }
`