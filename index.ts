// Import the framework and instantiate it
import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger';
import swaggerUI from "@fastify/swagger-ui";

const server: FastifyInstance = Fastify({
  logger: true
})

// Register plugins
await server.register(cors)

await server.register(swagger, {
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  }
})

await server.register(swaggerUI, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
});

// Declare a route
server.get<{
  Querystring: { name: string },
}>('/hello', async function handler(request, _reply) {
  const name = request.query.name
  return { hello: name ?? 'world' }
})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (_request, _reply) => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
    server.log.info(`server listening on ${port}`)

    await server.ready()
    server.swagger()

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
