const { promisify } = require('util')
const PrecisionCalculator = require('../../data/Calculator')
const DatabaseConnector = require('../../data/DatabaseConnector')
const joi = require('joi')
class ApiRoutes {
    async list(req) {
        var context = new DatabaseConnector();
        var queryFilters = req.query['minutes'];
        var estrategies = await context.getAllStrategies();
        var results = await context.getResultsByFilter(queryFilters * 2);
        var calculator = new PrecisionCalculator();
        calculator.calculatePrecision(estrategies, results)
        return estrategies
    }

    create(request) {
        var context = new DatabaseConnector();
        const strategy = {
            name: request.query['name'],
            type: request.query['type'],
            estrategy: request.query['strategy']
        }
        console.log(strategy)
        try {
            const result = context.createNewStrategy(strategy)
            return { message: "Estrategia cadastrada com sucesso." }
        } catch (err) {
            console.log(err)
            return { message: err }
        }
    }

    async getGeneral(request) {
        var context = new DatabaseConnector();
        var queryFilters = request.query['minutes'];
        var results = await context.getResultsByFilter(queryFilters * 2);
        const generalReturn = {
            whiteCounts: results.filter(x => x === "0").length,
            redCounts: results.filter(x => x === "1").length,
            blackCounts: results.filter(x => x === "2").length,
        }
        return generalReturn
    }
}

module.exports = ApiRoutes