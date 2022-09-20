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

async function getEstrategies() {
    var data = await api.get("/getestrategies?minutes=20")
    return data.data;
}

import React, { useState, useEffect } from 'react';

export default function CardField(props) {

    return (
        <StyledCardField>
            {props.estrategies.map((item, index) => {
                return <Card props={item} />
            })}
        </StyledCardField>
    )
}