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

const server: FastifyInstance = fastify({
  logger: process.env.NODE_DEVELOPMENT !== "test",
});

// Register plugins
void server.register(cors);

void server.register(swagger, {
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

void server.register(swaggerUI, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  staticCSP: true,
});

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
}

export default startServer;
