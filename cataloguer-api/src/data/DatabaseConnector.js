const { count } = require('console');
const { promisify } = require('util')

class DatabaseConnector {
    constructor() {
        this.mySQL = require('mysql2/promise');
        this.con = this.mySQL.createConnection({ host: "sql804.main-hosting.eu", user: "u522484614_dev", password: "Catalogador123" });
    }


    async getResultsByFilter(minutesFilter) {
        var query = `SELECT color FROM u522484614_db_catalogador.double_last_results  order by ID ASC LIMIT ${minutesFilter}`;
        var arrayResults = await this.con.then(conn => {
            const res = conn.query(query);
            conn.end()
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
            conn.end()

            return res;
        }).then(result => {
            return result[0]
        }).catch(err => {
            console.log(err);
        });
    }

    async createNewStrategy(strategy) {
        var query = `INSERT INTO u522484614_db_catalogador.estrategies (name, type, estrategy) VALUES ('${strategy.name}', '${strategy.type}', '${strategy.estrategy}')`
        return await this.con.then(conn => {
            const res = conn.query(query);
            conn.end()
            return res;
        }).then(result => {
            return result[0]
        }).catch(err => {
            console.log(err);
        });
    }

    async verifyUser(login, password) {
        var query = `SELECT * FROM u522484614_db_catalogador.users_adm WHERE user = '${login}' AND password = '${password}'`
        return await this.con.then(conn => {
            const res = conn.query(query);
            conn.end()
            if (res === null) {
                return res
            } else {
                return res
            }
        }).then(result => {
            return result[0]
        }).catch(err => {
            console.log(err);
        });
    }



}
module.exports = DatabaseConnector;