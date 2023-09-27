import { afterAll, beforeAll, describe, test, expect } from 'bun:test';
import fastify from 'fastify';

import { server } from '../server';

const app = fastify();

describe('API', () => {
  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  test('should return 200', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api',
    });

    expect(response.statusCode).toBe(200);
  });
})

