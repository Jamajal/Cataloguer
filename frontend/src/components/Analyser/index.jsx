import { StyledAnalyser } from './StyledAnalyser'

export default function Analyser(){
    return(
        <StyledAnalyser>
            <h3>Analise Geral</h3>
            <div className="statistics">
                <div>
                    <div className="statistic-square red" />
                    <label>48%</label>
                </div>
                <div>
                    <div className="statistic-square white" />
                    <label>2%</label>
                </div>
                <div>
                    <div className="statistic-square black" />
                    <label>50%</label>
                </div>
            </div>
            <p>O último branco foi a 23 rodadas</p>
        </StyledAnalyser>
    )
}