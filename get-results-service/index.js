const DoubleResultsManager = require('./src/http/DoubleConnector')
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function main() {
    console.log("Starting get dobule results ...");
    resultManager = new DoubleResultsManager();
    await resultManager.getLastDoubleResult();
    while (true) {
        resultManager.waitToDo()
        await sleep(2000);
    }
}
main()