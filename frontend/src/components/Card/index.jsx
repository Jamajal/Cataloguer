import { StyledCard } from './StyledCard'

function renderSquare(item) {
    let className = "square"
    if (item == 1) {
        className = "redSquare";
    } else if (item == 2) {
        className = "blackSquare"
    }
    return <div className={className} />
}
export default function Card({ props }) {
    return (
        <StyledCard>
            <div className="name">
                <p>{props.name}</p>
                <hr />
            </div>
            <div className="card-info">
                <p><span>{props.precision.toFixed(2)}</span>% de assertividade</p>
                <div className="squares">
                    <div className="first-part">
                        {props.match.map((item) => (renderSquare(item)))}
                    </div>
                    {renderSquare(props.win)}
                </div>
            </div>
            <div className="result">
                <p>{props.showWins} wins</p>
                <p>-</p>
                <p>{props.showLoss} loss</p>
            </div>
        </StyledCard>
    )
}