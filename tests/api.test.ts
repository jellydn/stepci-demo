import { fastify } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import app from '../app';

let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

beforeAll(async () => {
  server = fastify();
  server.register(app);
  await server.ready();
});

afterAll(() => {
  server.close();
});

describe('Fastify API', () => {
  it('should respond with 200 on GET /api', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api',
    });
    expect(response.statusCode).toBe(200);
  });

  it('should respond with 200 on GET /api/hello', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/hello',
    });
    expect(response.statusCode).toBe(200);
  });

  it('should respond with 200 and pong on GET /api/ping', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/ping',
    });
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ pong: 'it worked!' });
  });
});
