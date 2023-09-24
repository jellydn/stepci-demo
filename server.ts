// Import the framework and instantiate it
import fastify, {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
  type RouteShorthandOptions,
} from "fastify";

import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

const SERVER_PORT = Number(process.env.PORT ?? 3000);
const SERVER_HOST = process.env.SERVER_HOST ?? "localhost";

const server: FastifyInstance = fastify({
  logger: process.env.NODE_DEVELOPMENT !== "test",
});

// Register CORS Plugin
void server.register(cors);

// Register Swagger Plugin
void server.register(swagger, {
  swagger: {
    info: {
      title: "Simple API Documentation",
      description: "This is the documentation of the API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: `${SERVER_HOST}:${SERVER_PORT}`,
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
});

// Register Swagger UI Plugin
void server.register(swaggerUI, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
});

// Root Route
server.get("/", async (_request, _reply) => ({ status: "ok" }));

// Health check
server.get("/api", async (_request, _reply) => ({ ok: true }));

// Declare a route
server.get<{
  Querystring: { name: string };
}>("/api/hello", async (request) => {
  const { name } = request.query;
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
  "/api/ping",
  opts,
  async (_request: FastifyRequest, _reply: FastifyReply) => ({
    pong: "it worked!",
  }),
);

async function startServer() {
  try {
    await server.listen({
      port: SERVER_PORT,
      host: SERVER_HOST,
    });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    server.log.info(`server listening on ${port}`);

    await server.ready();
    server.swagger();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

export default startServer;
