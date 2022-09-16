import { StyledCardField } from './StyledCardField'
import Card from '../Card'
import api from '../../http/api'

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
        if (element.precision >= precisionFilters) {
            filteredItems.push(element)
        }
    });
    return filteredItems
}

export default function CardField(props) {
    const teste = [{ name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 80, loss: 56, winsG1: 23, winsG2: 2, win: "2" },
    { name: "4 cores alternado", match: ["1", "2", "1", "2"], wins: 89, loss: 23, winsG1: 27, winsG2: 13, win: "1" },
    { name: "4 cores pppp - v", match: ["2", "2", "2", "2"], wins: 88, loss: 12, winsG1: 29, winsG2: 16, win: "1" },
    { name: "3 cores vvv - p", match: ["1", "1", "1"], wins: 98, loss: 10, winsG1: 11, winsG2: 32, win: "2" }];
    teste.map(item => calculatePrecision(item, props.galeFilters));
    const filteredItems = filterCards(teste, props.precisionFilters)

    /* fetch("http://localhost:5000/getestrategies?minutes=20")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            consolelog(data)
        }) */

    return (
        <StyledCardField>
            {filteredItems.map((item, index) => (<Card props={item} />))}
            {/* {filterCards(teste, props.filterCards)} */}
        </StyledCardField>
    )
}