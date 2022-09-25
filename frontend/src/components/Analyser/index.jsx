import { StyledAnalyser } from './StyledAnalyser'
import React, { useState, useEffect } from 'react';
import api from '../../http/api'
async function getAnalyserData(time) {
    var data = await api.get(`/general?minutes=${time}`)
    return data.data;
}
export default function Analyser(props) {
    const [redSquare, setRedSquare] = useState(0)
    const [blackSquare, setBlackSquare] = useState(0)
    const [whiteSquare, setWhiteSquare] = useState(0)
    const data = getAnalyserData(props.props)

    useEffect(() => {
        data.then(function (item) {
            console.log(item)
            setRedSquare((item.redCounts / (item.whiteCounts + item.redCounts + item.blackCounts)) * 100)
            setBlackSquare((item.blackCounts / (item.whiteCounts + item.redCounts + item.blackCounts)) * 100)
            setWhiteSquare((item.whiteCounts / (item.whiteCounts + item.redCounts + item.blackCounts)) * 100)
        })
    }, [])
    return (
        <StyledAnalyser>
            <h3>Analise Geral</h3>
            <div className="statistics">
                <div>
                    <div className="statistic-square red" />
                    <label>{redSquare.toFixed(2)}%</label>
                </div>
                <div>
                    <div className="statistic-square white" />
                    <label>{whiteSquare.toFixed(2)}%</label>
                </div>
                <div>
                    <div className="statistic-square black" />
                    <label>{blackSquare.toFixed(2)}%</label>
                </div>
            </div>
            {/* <p>O último branco foi a 23 rodadas</p> */}
        </StyledAnalyser>
    )
}