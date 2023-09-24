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

  import app from '../src/app';
  
  describe('Fastify API tests', () => {
    let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;
  
    beforeEach(() => {
      server = app;
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
  
    test('GET /api/ping again', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/api/ping',
      });
  
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ pong: 'it works!' });
    });
  
    // Add more tests as needed
  });

  // Add more tests as needed
});
