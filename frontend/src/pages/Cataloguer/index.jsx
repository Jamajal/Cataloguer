import Bar from '../../components/Bar'
import Header from '../../components/Header'
import Analyser from '../../components/Analyser'
import CardField from '../../components/CardField'
import Game from '../../components/Game'
import FilterButton from '../../components/FilterButton'
import Login from '../Login'
import RegistrateCard from '../RegistrateCard'
import api from '../../http/api'
import { StyledCataloguer } from './StyledCataloguer'
import React, { useState, useEffect } from 'react';

/* 
    Ao diminuir o layout para mobile, eu queria fazer trocas de containers para outro
    a ideia que tive foi de criar ementos iguais em diferentes containers e controlar
    quais estão aparecendo utilizando classes com display: none. Os nomes dessas classe
    são tipo screen-only, sendo screen as telas em que o elemento irá aparecer
*/
async function calculatePrecision(item, selectedGales) {

    item.precision = 0
    item.showLoss = 0
    item.showWins = 0
    var currency = item.currencyWins + item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2
    if (selectedGales == 'nogale') {
        console.log('noGale')
        if (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 == 0) {
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        }
        item.precision = item.currencyWins / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        item.showWins = item.currencyWins
        item.showLoss = item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2
    } else if (selectedGales == '1gale') {
        console.log('1GALE')
        if (item.currencyLoss + item.currencyWinsG2 == 0) {
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        }
        item.precision = (item.currencyWins + item.currencyWinsG1) / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        item.showWins = item.currencyWinsG1 + item.currencyWins
        item.showLoss = item.currencyLoss + item.currencyWinsG2
    }
    else if (selectedGales == '2gale') {
        console.log('noGale')
        if (item.currencyLoss == 0) {
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        }
        item.precision = (item.currencyWins + item.currencyWinsG1 + item.currencyWinsG2) / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        item.showWins = item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins
        item.showLoss = item.currencyLoss
    } else {
        item.precision = 0
        item.showLoss = 0
        item.showWins = 0
    }
}


async function getEstrategies(time) {
    var data = await api.get(`/getestrategies?minutes=${time}`)
    return data.data;
}

function fillter(data, precision) {
    var filteredVector = []
    data.forEach(element => {
        if (element.precision >= precision)
            filteredVector.push(element)
    });
    return filteredVector
}


export default function Cataloguer() {
    const [assertiveness, setAssertiveness] = useState("90")
    const [latest, setLatest] = useState(10)
    const [gales, setGales] = useState("nogale")
    const [estrategies, setEstrategies] = useState([])
    const [saveEstrategies, setSaveEstrategies] = useState([])
    var data = getEstrategies(latest)
    useEffect(() => {
        data.then(function (result) {
            setSaveEstrategies(result)
            result.map((item) => calculatePrecision(item, gales));
            setEstrategies(fillter(result, assertiveness))
        })

    }, [])
    const reset = () => {
        data = getEstrategies(latest)
        data.then(function (result) {
            setSaveEstrategies(result)
            result.map((item) => calculatePrecision(item, gales));
            setEstrategies(fillter(result, assertiveness))
        })
        // saveEstrategies.map((item) => calculatePrecision(item, gales));
        // setEstrategies(fillter(saveEstrategies, assertiveness));
    }
    return (
        <StyledCataloguer>
            <Bar />
            <main>
                <div className="left-side">
                    <div className="filter">
                        <div className="selects">
                            <select
                                value={assertiveness}
                                onChange={e => setAssertiveness(e.target.value)}
                                id="percent"
                            >
                                <option value="90">MAIS DE 90%</option>
                                <option value="80">MAIS DE 80%</option>
                                <option value="70">MAIS DE 70%</option>
                                <option value="50">MAIS DE 50%</option>
                                <option value="40">MAIS DE 40%</option>
                            </select>
                            <select
                                value={latest}
                                onChange={e => setLatest(e.target.value)}
                                id="latest"
                            >
                                <option value="10">ÚLTIMOS 10 MINUTOS</option>
                                <option value="30">ÚLTIMOS 30 MINUTOS</option>
                                <option value="60">ÚLTIMA HORA</option>
                                <option value="180">ÚLTIMAS 3 HORAS</option>
                                <option value="1440">ÚLTIMO DIA</option>
                            </select>
                            <select value={gales}
                                onChange={e => setGales(e.target.value)}
                                id="gales"
                            >
                                <option value="nogale">SEM GALE</option>
                                <option value="1gale">GALE 1</option>
                                <option value="2gale">GALE 2</option>
                            </select>
                        </div>
                        <div className="mobile-only filter-button-header">
                            {/* <FilterButton /> */}
                            <button className='filterButton' onClick={reset} >Filtrar</button>
                        </div>
                    </div>
                    <div className="desk-tablet-only game-screen">
                        <Game />
                    </div>
                    <div className="mobile-only card-field-left">
                        <CardField galeFilters={gales} precisionFilters={assertiveness} estrategies={estrategies} />
                    </div>
                    <Analyser props={latest} />
                </div>
                <div className="right-side">
                    <div className="desk-tablet-only filter-button-box">
                        {/* <FilterButton /> */}
                        <button className='filterButton' onClick={reset} >Filtrar</button>
                    </div>
                    <div className="desk-tablet-only card-field-box">
                        <CardField galeFilters={gales} precisionFilters={assertiveness} estrategies={estrategies} />
                    </div>
                    <div className="mobile-only game-screen">
                        <Game />
                    </div>
                </div>
            </main>
        </StyledCataloguer>
    )
} 
