import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import * as jest from 'jest';

describe('Fastify API tests', () => {
  let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

  beforeEach(() => {
    server = fastify({});
  });

  afterEach(() => {
    server.close();
  });

  test('GET /api/ping', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/ping',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ pong: 'it works!' });
  });

  // Add more tests as needed
});
