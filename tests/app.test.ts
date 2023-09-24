import { FastifyInstance } from 'fastify';
import { test } from 'tap';
import app from '../app';

test('GET `/api` route', async (t) => {
  const fastify: FastifyInstance = app();

  const response = await fastify.inject({
    method: 'GET',
    url: '/api',
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
});
