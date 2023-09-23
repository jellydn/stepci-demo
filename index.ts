// Import the framework and instantiate it
import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptions,
} from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

const server: FastifyInstance = Fastify({
  logger: process.env.NODE_DEVELOPMENT === "test" ? false : true,
});

// Register plugins
await server.register(cors);

await server.register(swagger, {
  swagger: {
    info: {
      title: "Test swagger",
      description: "This is the documentation of the API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:3000",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

await server.register(swaggerUI, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
});

// Health check
server.get("/", async (_request, _reply) => {
  return { ok: true };
});


// Declare a route
server.get<{
  Querystring: { name: string };
}>("/hello", async function handler(request) {
  const name = request.query.name;
  return { hello: name ?? "world" };
});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get(
  "/ping",
  opts,
  async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { pong: "it worked!" };
  }
);

async function startServer() {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    server.log.info(`server listening on ${port}`);

    await server.ready();
    server.swagger();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

if (process.env.DEPLOYMENT_ENV !== 'vercel') startServer();

export default startServer;

