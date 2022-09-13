class DatabaseConnector {
    constructor() {
        this.mySQL = require('mysql2');
        this.con = this.mySQL.createConnection({ host: "sql804.main-hosting.eu", user: "u522484614_dev", password: "Catalogador123" });
        this.con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }
    insertInResults(color) {
        var query = `INSERT INTO  u522484614_db_catalogador.double_last_results (color) VALUES (${color})`;
        this.con.query(query, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted")
        })
    }
}
module.exports = DatabaseConnector;