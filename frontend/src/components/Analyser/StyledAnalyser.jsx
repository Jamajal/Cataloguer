import styled from 'styled-components'

export const StyledAnalyser = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .statistics{
        display: flex;
    }

    .statistics > div{
        display: flex;
    }

    .statistic-square{
        width: 30px;
        height: 30px;
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