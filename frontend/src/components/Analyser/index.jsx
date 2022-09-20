import { StyledAnalyser } from './StyledAnalyser'
import React, { useState, useEffect } from 'react';

export default function Analyser(props) {
    const [redSquare, setRedSquare] = useState(0)
    const [blackSquare, setBlackSquare] = useState(0)
    const [whiteSquare, setWhiteSquare] = useState(0)
    const [allSquare, setAllSquare] = useState(0)
    const [lastWhite, setLastWhite] = useState(0)
    useEffect(() => {
        setAllSquare(props.props.whiteCounts + props.props.redCounts + props.props.blackCounts)
        setRedSquare((props.props.redCounts / allSquare) * 100)
        setBlackSquare((props.props.blackCounts / allSquare) * 100)
        setWhiteSquare((props.props.whiteCounts / allSquare) * 100)
    }, [])
    console.log(props.props)
    return (
        <StyledAnalyser>
            <h3>Analise Geral</h3>
            <div className="statistics">
                <div>
                    <div className="statistic-square red" />
                    <label>{redSquare}%</label>
                </div>
                <div>
                    <div className="statistic-square white" />
                    <label>{whiteSquare}%</label>
                </div>
                <div>
                    <div className="statistic-square black" />
                    <label>{blackSquare}%</label>
                </div>
            </div>
            {/* <p>O último branco foi a 23 rodadas</p> */}
        </StyledAnalyser>
    )
}