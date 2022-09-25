const { promisify } = require('util')
const PrecisionCalculator = require('../../data/Calculator')
const DatabaseConnector = require('../../data/DatabaseConnector')
const joi = require('joi');
const { bool, boolean } = require('joi');
class ApiRoutes {
    async list(req) {
        var queryFilters = req.query['minutes'];
        var estrategies = await new DatabaseConnector().getAllStrategies();
        var results = await new DatabaseConnector().getResultsByFilter(queryFilters * 2);
        var calculator = new PrecisionCalculator();
        calculator.calculatePrecision(estrategies, results)
        return estrategies
    }

    create(request) {
        const strategy = {
            name: request.query['name'],
            type: request.query['type'],
            estrategy: request.query['strategy']
        }
        console.log(strategy)
        try {
            const result = new DatabaseConnector().createNewStrategy(strategy)
            return { message: "Estrategia cadastrada com sucesso." }

        } catch (err) {
            console.log(err)
            return { message: "Erro no servidor. Contate seu administrador." }
        }
    }

    async getGeneral(request) {
        var queryFilters = request.query['minutes'];
        var results = await new DatabaseConnector().getResultsByFilter(queryFilters * 2);
        const generalReturn = {
            whiteCounts: results.filter(x => x === "0").length,
            redCounts: results.filter(x => x === "1").length,
            blackCounts: results.filter(x => x === "2").length,
        }
        return generalReturn
    }

    async login(res) {
        var user = res.body['user'];
        var pass = res.body['password'];
        var results = await new DatabaseConnector().verifyUser(user, pass);
        console.log(results)
        if (results.length == 0) {
            return { message: false };
        } else {
            return { message: true };
        }
    }
}

module.exports = ApiRoutes