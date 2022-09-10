import styled from 'styled-components'

export const StyledAnalyser = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #9599A8;

    > h3{
        font-size: 24px;
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
`