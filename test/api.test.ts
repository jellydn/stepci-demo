import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { test, expect, mock } from "bun:test";

// TODO: add all test cases
import app from '../src/app';

describe('Fastify API tests', () => {
  let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

  beforeEach(() => {
    server = fastify({});
  });

  afterEach(() => {
    server.close();
  });

  test('GET /api', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api',
    });

    expect(response.statusCode).toBe(200);
  });

  test('GET /api/hello', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/hello',
    });

    expect(response.statusCode).toBe(200);
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
