const Hapi = require('hapi')
const ApiRoutes = require('./src/http/routes/Routes')
const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
async function main() {
    const routes = new ApiRoutes()
    app.get('/getestrategies', async (req, res) => {
        const result = await routes.list(req)
        console.log(result)
        res.send(result)
    })
    app.post('/createstrategy', async (req, res) => {
        const result = await routes.create(req)
        res.send(result)
    })
    app.get('/general', async (req, res) => {
        const result = await routes.getGeneral(req)
        res.send(result)
    })
    app.post('/login', async (req, res) => {
        const result = await routes.login(req);
        res.send(result);
    })
    app.listen(5000, () =>
        console.log(`Example app listening on port ${5000}!`),
    );
}
main()