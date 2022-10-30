import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
const port = 9000

async function startApolloServer() { 
    const server = new ApolloServer({ schema })
    await server.start()
    server.applyMiddleware({ app, path: '/api' })}startApolloServer()
    app.listen(port, () => {
        console.log(`[app]: listening at http://localhost:${port}`)
    }
    )