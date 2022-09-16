import { StyledCardField } from './StyledCardField'
import Card from '../Card'
import api from '../../http/api'
import { useState } from 'react'
async function calculatePrecision(item, selectedGales) {
    item.precision = 0
    if (selectedGales == 'noGales') {
        item.precision = item.wins / (item.loss + item.winsG1 + item.winsG2 + item.wins) * 100
        item.showWins = item.wins
        item.showLoss = item.loss + item.winsG1 + item.winsG2
    } else if (selectedGales == '1gale') {
        console.log("SIMM")
        item.precision = (item.wins + item.winsG1) / (item.loss + item.winsG1 + item.winsG2 + item.wins) * 100
        item.showWins = item.winsG1 + item.wins
        item.showLoss = item.loss + item.winsG2
    }
    else if (selectedGales == '2gale') {
        item.precision = (item.wins + item.winsG1 + item.winsG2) / (item.loss + item.winsG1 + item.winsG2 + item.wins) * 100
        item.showWins = item.winsG1 + item.winsG2 + item.wins
        item.showLoss = item.loss
    } else {
        console.log("none")
    }
}

function filterCards(items, precisionFilters) {
    var filteredItems = []
    items.forEach(element => {
        console.log("This element", element)
        if (element.precision >= precisionFilters) {
            filteredItems.push(element)
        }
    });
    return filteredItems
}

async function getEstrategies() {
    const data = await fetch("http://localhost:5000/getestrategies?minutes=20")
        .then(function (response) {
            return response.json()
        })
    return data;
}


export default function CardField(props) {
    const [estrategies, setEstrategies] = useState()
    const [filteredItems, filterItems] = useState()
    var data = getEstrategies()
    data.then(function (result) {
        setEstrategies(result)
        return result;
    });
    // filterItems(filterCards(estrategies, props.precisionFilters))
    // estrategies.map(item => calculatePrecision(item, props.galeFilters));
    // const filteredItems = filterCards(estrategies, props.precisionFilters)
    return (
        <StyledCardField>
            {filteredItems.map((item, index) => (<Card props={item} />))}
            {/* {filterCards(teste, props.filterCards)} */}
        </StyledCardField>
    )
}