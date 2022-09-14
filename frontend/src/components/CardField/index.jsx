import { StyledCardField } from './StyledCardField'
import Card from '../Card'
import api from '../../http/api'

async function getEstrategies() {
    const response = await api.get("/getstrategies");
    console.log(response.data)
}

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
    const teste = [{ name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 150, loss: 10, winsG1: 24, winsG2: 33, win: "2" },
    { name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 100, loss: 10, winsG1: 24, winsG2: 33, win: "2" },
    { name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 200, loss: 10, winsG1: 24, winsG2: 33, win: "2" },
    { name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 100, loss: 10, winsG1: 24, winsG2: 33, win: "2" },
    { name: "4 cores vvvv- p", match: ["1", "1", "1", "1"], wins: 540, loss: 10, winsG1: 24, winsG2: 33, win: "2" }];
    teste.map((item) => calculatePrecision(item, props.galeFilters));
    const filteredItems = filterCards(teste, props.precisionFilters)
    return (
        <StyledCardField>
            {filteredItems.map((item) => (<Card props={item} />))}
            {/* {filterCards(teste, props.filterCards)} */}
        </StyledCardField>
    )
}