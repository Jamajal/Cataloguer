import { StyledCard } from './StyledCard'

export default function Card(){
    return(
        <StyledCard>
            <div className="name">
                <p>6 cores - Minoria</p>
                <hr />
            </div>
            <div className="card-info">
                <p><span>90,53%</span> de assertividade</p>
                <div className="squares">
                    <div className="first-part">
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                    </div>
                    <div className="square" />
                </div>
            </div>
            <div className="result">
                <p>11 wins</p>
                <p>-</p>
                <p>2 loses</p>
            </div>
        </StyledCard>
    )
}