import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { test, expect, mock } from "bun:test";
import app from '../src/app';
const random = mock(() => Math.random());

test("random", async () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});

describe('Fastify API tests', () => {
  let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

  beforeEach(() => {
    server = fastify({});
  });

  afterEach(() => {
    server.close();
  });

  describe('Fastify API tests', () => {
    let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;
    
    beforeEach(() => {
      server = app;
    });
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
