class PrecisionCalculator {
    constructor(results) {
        this.results = results;
    }

    normalStrategy(strategy, results) {
        var wins = 0
        var winsG1 = 0
        var winsG2 = 0
        var loss = 0
        var matchSize = strategy['match'].length
        var count2 = 0
        var splitedVector = []
        var count = 0
        while (count < results.length) {
            splitedVector.push(results.slice(count, matchSize + count))
            count += 1
        }
        while (count2 < splitedVector.length) {
            if (JSON.stringify(splitedVector[count2]) === JSON.stringify(strategy['match'])) {
                if (strategy['win'] == splitedVector[count2 + 1][matchSize - 1]) {
                    wins += 1
                }
                else if (strategy['win'] == splitedVector[count2 + 2][matchSize - 1]) {
                    winsG1 += 1
                }
                else if (strategy['win'] == splitedVector[count2 + 3][matchSize - 1]) {
                    winsG2 += 1
                }
                else {
                    console.log(strategy['win'], "TEste ", splitedVector[count2 + 1][matchSize - 1])
                    loss += 1
                }
            }
            count2 += 1
        }
        strategy['currencyWins'] = wins
        strategy['currencyWinsG1'] = winsG1
        strategy['currencyWinsG2'] = winsG2
        strategy['currencyLoss'] = loss
    }
    countColors(vector) {
        var redCounts = vector.filter(function (item) {
            if (item == 1) {
                return true;
            } else {
                return false;
            }
        }).length;
        var blackCounts = vector.filter(function (item) {
            if (item == 2) {
                return true;
            } else {
                return false;
            }
        }).length;
        var whiteCounts = vector.filter(function (item) {
            if (item == 2) {
                return true;
            } else {
                return false;
            }
        }).length;
        const counts = {
            redCounts: redCounts,
            whiteCounts: whiteCounts,
            blackCounts: blackCounts
        }
        return counts
    }
    mm(strategy, results) {
        var wins = 0
        var winsG1 = 0
        var winsG2 = 0
        var loss = 0
        var matchSize = strategy['match'].length
        var count2 = 0
        var splitedVector = []
        var count = 0
        console.log(results)
        var strategyCount = this.countColors(strategy['match'])
        while (count < results.length) {
            splitedVector.push(results.slice(count, matchSize + count))
            count += 1
        }
        console.log(splitedVector)
        var count2 = 0;
        while (count2 < splitedVector.length) {
            var thisCount = this.countColors(splitedVector[count2])
            try {
                if ((thisCount.blackCounts > thisCount.redCounts && strategyCount.blackCounts > strategyCount.redCounts) || thisCount.blackCounts < thisCount.redCounts && strategyCount.blackCounts < strategyCount.redCounts) {
                    if (strategy['win'] == splitedVector[count2 + 1][matchSize - 1]) {
                        wins += 1
                    }
                    else if (strategy['win'] == splitedVector[count2 + 2][matchSize - 1]) {

                        winsG1 += 1
                    }
                    else if (strategy['win'] == splitedVector[count2 + 3][matchSize - 1]) {
                        console.log(splitedVector[count2 + 3][matchSize - 1])
                        winsG2 += 1
                    }
                    else {
                        loss += 1
                    }
                }
            } catch (err) {
                if (splitedVector[count2].length == strategy.length)
                    loss += 1
                console.log(err)
            }
            count2 += 1
        }
        strategy['currencyWins'] = wins
        strategy['currencyWinsG1'] = winsG1
        strategy['currencyWinsG2'] = winsG2
        strategy['currencyLoss'] = loss
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

            if (element['type'] == 'normal') {
                this.normalStrategy(element, results)
            } else {
                this.mm(element, results)
            }
        })
    }
}

module.exports = PrecisionCalculator