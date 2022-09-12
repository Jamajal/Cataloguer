import styled from 'styled-components'

/* export const StyledCataloguer = styled.div`
    width: 100%;
    height: 90vh;
    
    main{
        width: 100%;
        display: flex;
        padding: 0 20px;
    }

    .left-side{
        width: 100%;
    } 

    .right-side{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
` */


export const StyledCataloguer = styled.div`
    width: 100%;
    height: 90vh;

    main{
        padding: 0 10px 0 20px;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: space-between;
        gap: 10px;
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
        height: 100%;
        width: 30%;
        align-items: center;
    }
    
    .filter-button-box{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }

    .game-screen{
        height: 100%;
        width: 100%;
    }

    .card-field-box{
        width: 100%;
        overflow: auto;

        display: flex;
        justify-content: center;

        scrollbar-width: none;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    .mobile-only{
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        main > .right-side > button{
            width: 55%;

            padding: 3px 5px;
            
            font-size: 16px;

            background-color: #E81538;

            border-radius: 7px;
        }
    }

    @media (max-width: 767px){
        height: auto;

        main{
            flex-direction: column;
            justify-content: center;
            gap: 10px;
        }

        main > div{
            padding-top: 10px;
        }

        main > .left-side{
            gap: 10px;
        }

        main > .right-side{
            width: 100%;
            margin-bottom: 20px;
        }

        .desk-tablet-only{
            display: none;
        }

        .mobile-only{
            display: flex;
            justify-content: center;
        }

        .card-field-left{
            flex-direction: row;
            overflow: auto;

            ::-webkit-scrollbar{
                height: 3px;
            }

            ::-webkit-scrollbar-track{
                background-color: rgba(0,0,0,0.5);
                border-radius: 20px;
            }

            ::-webkit-scrollbar-thumb{
                background-color: #E81538;
                border-radius: 20px;
            }
        }

        .game-screen{
            height: 500px;
        }
    }
`