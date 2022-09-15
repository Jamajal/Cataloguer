const { promisify } = require('util')

class DatabaseConnector {
    constructor() {
        this.mySQL = require('mysql2/promise');
        this.con = this.mySQL.createConnection({ host: "sql804.main-hosting.eu", user: "u522484614_dev", password: "Catalogador123" });
    }

    async getResultsByFilter(minutesFilter) {
        var query = "SELECT COUNT(*) FROM u522484614_db_catalogador.double_last_results";
        var counter = await this.con.then(conn => {
            const res = conn.query(query);
            return res;
        }).then(result => {
            return result[0]

        }).catch(err => {
            console.log(err); // any of connection time or query time errors from above
        });
        counter = counter[0]['COUNT(*)']
        counter = counter - minutesFilter
        var query = `SELECT color FROM u522484614_db_catalogador.double_last_results WHERE id > ${counter} order by ID DESC`;
        var arrayResults = await this.con.then(conn => {
            const res = conn.query(query);
            return res;
        }).then(result => {
            return result[0]
        }).catch(err => {
            console.log(err); // any of connection time or query time errors from above
        });
        var returnedArray = []
        arrayResults.forEach(element => {
            returnedArray.push(element['color'].toString())
        })
        return returnedArray
    }

    async getAllStrategies() {
        var query = "SELECT * FROM u522484614_db_catalogador.estrategies"
        return await this.con.then(conn => {
            const res = conn.query(query);
            return res;
        }).then(result => {
            return result[0]
        }).catch(err => {
            console.log(err); // any of connection time or query time errors from above
        });
    }

}
module.exports = DatabaseConnector;