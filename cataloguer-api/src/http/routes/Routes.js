const BaseRoute = require('./base/baseRoutes')
const { promisify } = require('util')
const PrecisionCalculator = require('../../data/Calculator')
const DatabaseConnector = require('../../data/DatabaseConnector')
class ApiRoutes extends BaseRoute {
    constructor() {
        super()
    }
    list() {
        return {
            path: "/getestrategies",
            method: "GET",
            handler: async (request, head) => {
                var context = new DatabaseConnector();
                var queryFilters = request.query['minutes'];
                console.log(queryFilters)
                var estrategies = await context.getAllStrategies();
                var results = await context.getResultsByFilter(queryFilters * 2);
                var calculator = new PrecisionCalculator();
                calculator.calculatePrecision(estrategies, results)
                console.log(estrategies)
                return estrategies
            }
        }
    }
}

module.exports = ApiRoutes