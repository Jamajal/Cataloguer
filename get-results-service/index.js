const DoubleResultsManager = require('./src/http/DoubleConnector')

async function main() {
    console.log("Starting get dobule results ...");
    resultManager = new DoubleResultsManager();
    await resultManager.getLastDoubleResult();
    resultManager.waitToDo()
}
main()