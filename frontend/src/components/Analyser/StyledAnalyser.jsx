import styled from 'styled-components'

export const StyledAnalyser = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    color: #9599A8;

    > h3{
        font-size: 20px;
        color: white;
    }

    .statistics{
        display: flex;
        gap: 50px;
    }

    .statistics > div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .statistics > div > label{
        font-size: 20px;
    }

    .statistic-square{
        width: 40px;
        height: 40px;

        border-radius: 5px;
    }

    .red{
        background-color: #E81538;
    }
    .white{
        background-color: #FFFFFF;
    }
    .black{
        background-color: #000000;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        margin-top: 10px;

        > h3{
            font-size: 20px;
        }

        .statistics{
            gap: 30px;
        }
    }

    @media (max-width: 767px){
        margin-top: 10px;

        > h3{
            font-size: 18px;
        }

        .statistics{
            gap: 20px;
        }

        .statistics > div{
            gap: 5px;
        }

        .statistics > div > label{
            font-size: 14px;
        }

        .statistic-square{
            width: 30px;
            height: 30px;
        }

        > p{
            font-size: 12px;
        }
    }
`