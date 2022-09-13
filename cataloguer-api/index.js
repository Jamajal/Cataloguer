const Hapi = require('hapi')
const Routes = require('./src/http/routes/Routes')
const DatabaseConnector = require('./src/data/DatabaseConnector')

const app = new Hapi.Server({
    port: 5000
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    app.route([
        ...mapRoutes(new Routes(new DatabaseConnector()), Routes.methods())
    ])
    await app.start()
    console.log("Servidor rodando em", app.port)
    return app
}
main()