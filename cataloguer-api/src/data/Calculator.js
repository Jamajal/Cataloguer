class PrecisionCalculator {
    constructor(results) {
        this.results = results;
    }

    calculatePrecision(estrategies, results) {
        estrategies.forEach(element => {
            element['estrategy'] = element['estrategy'].replace(/V/g, 1);
            element['estrategy'] = element['estrategy'].replace(/P/g, 2);
            element['estrategy'] = element['estrategy'].replace(/B/g, 0);
            element['estrategy'] = element['estrategy'].split(" ");
            element['win'] = element['estrategy'][element['estrategy'].length - 1];
            element['match'] = element['estrategy'].slice(0, -1)
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
                    if (element['win'] == splitedVector[count2 + 1][matchSize - 1]) {
                        wins += 1
                    }
                    else if (element['win'] == splitedVector[count2 + 2][matchSize - 1]) {

                        winsG1 += 1
                    }
                    else if (element['win'] == splitedVector[count2 + 3][matchSize - 1]) {

                        winsG2 += 1
                    }
                    else {
                        console.log(element['win'], "TEste ", splitedVector[count2 + 1][matchSize - 1])
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