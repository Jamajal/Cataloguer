const Hapi = require('hapi')
const ApiRoutes = require('./src/http/routes/Routes')
const express = require('express')
const cors = require('cors')
const app = express();
app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
    if (req.secure) //Se a requisição feita é segura (é HTTPS)
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    else //Se a requisição não for segura (é HTTP)
        res.redirect(`https://${req.hostname}${req.url}`); //Redireciona a requisição para o mesmo host e url mas com HTTPS e termina a request
});
app.use(cors())
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
    app.listen(5000, () =>
        console.log(`Example app listening on port ${5000}!`),
    );
}
main()