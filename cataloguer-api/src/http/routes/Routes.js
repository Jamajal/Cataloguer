const BaseRoute = require('./base/baseRoutes')
const { promisify } = require('util')
const PrecisionCalculator = require('../../data/Calculator')

class ApiRoutes extends BaseRoute {
    constructor(dbContext) {
        super()
        this.context = dbContext
    }
    list() {
        return {
            path: "/getestrategies",
            method: "GET",
            handler: async (request, head) => {
                var queryFilters = request.query['minutes'];
                var estrategies = await this.context.getAllStrategies();
                var results = await this.context.getResultsByFilter(queryFilters * 2);
                var calculator = new PrecisionCalculator();
                calculator.calculatePrecision(estrategies, results)
                return estrategies
            }
        }
    }
}



module.exports = ApiRoutes