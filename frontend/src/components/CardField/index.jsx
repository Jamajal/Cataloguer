import { StyledCardField } from './StyledCardField'
import Card from '../Card'
import api from '../../http/api'

async function calculatePrecision(item, selectedGales) {
    item.precision = 0
    item.showLoss = 0
    item.showWins = 0
    if (selectedGales == 'nogale') {
        if (item.currencyLoss == 0) {
            var currency = item.currencyWins
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        } else {
            item.precision = item.currencyWins / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        }
        item.showWins = item.currencyWins
        item.showLoss = item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2
    } else if (selectedGales == '1gale') {
        if (item.currencyLoss == 0) {
            var currency = item.currencyWinsG1 + item.currencyWins
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        } else {
            item.precision = (item.currencyWins + item.currencyWinsG1) / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        }
        item.showWins = item.currencyWinsG1 + item.currencyWins
        item.showLoss = item.currencyLoss + item.currencyWinsG2
    }
    else if (selectedGales == '2gale') {
        if (item.currencyLoss == 0) {
            var currency = item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins
            if (currency != 0) {
                item.precision = 100
            }
            else {
                item.precision = 0
            }
        } else {
            item.precision = (item.currencyWins + item.currencyWinsG1 + item.currencyWinsG2) / (item.currencyLoss + item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins) * 100
        }
        item.showWins = item.currencyWinsG1 + item.currencyWinsG2 + item.currencyWins
        item.showLoss = item.currencyLoss
    } else {
        item.precision = 0
        item.showLoss = 0
        item.showWins = 0
    }
}

function filterCards(items, precisionFilters) {
    var filteredItems = []

    items.forEach(element => {
        if (element.precision >= precisionFilters) {
            filteredItems.push(element)
        }
    });
    return filteredItems
}

async function getEstrategies() {
    const data = api.get("/getestrategies?minutes=20").then((data) => {
        return data.data;
    })
    var results = data.then(function (result) {
        return result;
    });
    return results;
}

import React, { useState, useEffect } from 'react';

export default function CardField(props) {
    const [estrategies, setEstrategies] = useState([])
    const [filteredItems, setFiltered] = useState([])
    const filteredCards = []
    var data = getEstrategies()
    useEffect(() => {
        data.then(function (result) {
            result.map((item) => calculatePrecision(item, props.galeFilters));
            console.log("DATA", result)
            setEstrategies(result)
        })
    }, [])
    // estrategies.map((item) => calculatePrecision(item, props.galeFilters));
    console.log("ESTRATEGIES", estrategies)
    // var teste = [{ name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 2000, loss: 56, winsG1: 23, winsG2: 2, win: "2" },
    // { name: "4 cores alternado", match: ["1", "2", "1", "2"], wins: 89, loss: 23, winsG1: 27, winsG2: 13, win: "1" },
    // { name: "4 cores pppp - v", match: ["2", "2", "2", "2"], wins: 88, loss: 12, winsG1: 29, winsG2: 16, win: "1" },
    // { name: "3 cores vvv - p", match: ["1", "1", "1"], wins: 98, loss: 10, winsG1: 11, winsG2: 32, win: "2" }];
    return (
        <StyledCardField>
            {estrategies.map((item, index) => (<Card props={item} />))}
            {/* {filterCards(teste, props.filterCards)} */}
        </StyledCardField>
    )
}