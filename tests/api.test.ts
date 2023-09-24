import { fastify } from 'fastify';
import { describe, expect, test } from '@jest/globals';

const app = fastify();

describe('Fastify API', () => {
  test('GET /api', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api'
    });

    expect(response.statusCode).toBe(200);
  });

  test('GET /api/hello', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/hello'
    });

    expect(response.statusCode).toBe(200);
  });

  test('GET /api/ping', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/ping'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ pong: 'it worked!' });
  });
});
