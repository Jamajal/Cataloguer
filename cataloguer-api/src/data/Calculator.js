class PrecisionCalculator {
    constructor(results) {
        this.results = results;
    }

    calculatePrecision(estrategies, results) {
        estrategies.forEach(element => {
            element['estrategy'] = element['estrategy'].replace(/V/g, 1);
            element['estrategy'] = element['estrategy'].replace(/P/g, 2);
            element['estrategy'] = element['estrategy'].split(" ");
            element['win'] = element['estrategy'].pop();
            element['match'] = [...element['estrategy']]
            element['match'].pop()
        });
        estrategies.forEach(element => {
            var wins = 0
            var winsG1 = 0
            var winsG2 = 0
            var loss = 0
            var splitedVector = []
            var count = 0
            var matchSize = element['match'].length
            while (count < results.length) {
                splitedVector.push(results.slice(count, matchSize + count))
                count += 1
            }
            var count2 = 0
            while (count2 < splitedVector.length) {
                if (JSON.stringify(splitedVector[count2]) === JSON.stringify(element['match'])) {
                    console.log(splitedVector[count2])
                    console.log(element['match'])
                    console.log("----------------------")
                    if (element['win'] == results[matchSize + 1]) {
                        wins += 1
                    }
                    else if (element['win'] == results[matchSize + 2]) {
                        winsG1 += 1
                    }
                    else if (element['win'] == results[matchSize + 3]) {
                        winsG2 += 1
                    }
                    else {
                        loss += 1
                    }
                }
                count2 += 1
            }
            element['currencyWins'] = wins
            element['currencyWinsG1'] = winsG1
            element['currencyWinsG2'] = winsG2
            element['currencyLoss'] = loss
        })
    }
}

module.exports = PrecisionCalculator