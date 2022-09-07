const axios = require('axios')

class DoubleResultsManager {
    constructor() {
        this.axios = axios;
        this.lastId = ""
        this.lastData = null
    }

    async getLastDoubleResult() {
        try {
            let result = await axios.get('https://blaze.com/api/roulette_games/recent');
            this.lastData = result.data[0];
            this.lastId = result.data[0]['id'];
        } catch (err) {
            console.log(err);
        }
        console.log(this.lastId)
    }

    async verifyNewRole() {
        try {
            var result = await axios.get('https://blaze.com/api/roulette_games/recent');
            var actualId = result.data[0]['id'];
            if (actualId != this.lastId) {
                this.lastData = result.data[0];
                this.lastId = result.data[0]['id'];
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async saveLastResult() {
        console.log("saving results")
    }

    async waitToDo() {
        if (await this.verifyNewRole() == true) {
            this.saveLastResult()
        } else {
            console.log("Wait for new result...")
        }
    }
}

module.exports = DoubleResultsManager;