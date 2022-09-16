const Hapi = require('hapi')
const Routes = require('./src/http/routes/Routes')


const app = new Hapi.Server({
    port: 5000,
    routes: {
        cors: {
            origin: ['*'], // an array of origins or 'ignore'
            headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Accept-language'], // all default apart from Accept-language
            additionalHeaders: ['cache-control', 'x-requested-with', 'Access-Control-Allow-Origin']
        }
    },
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    app.route([
        ...mapRoutes(new Routes(), Routes.methods())
    ])
    await app.start()
    console.log("Servidor rodando em", app.port)
    return app
}
main()