import { test } from 'tap';
import Fastify from 'fastify';
import app from '../app';

test('GET `/api` route', async (t) => {
  const fastify = Fastify();
  fastify.register(app);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api'
  });

  t.strictEqual(response.statusCode, 200);
  t.strictEqual(response.json(), { message: 'API is working' });
});

test('GET `/api/hello` route', async (t) => {
  const fastify = Fastify();
  fastify.register(app);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/hello'
  });

  t.strictEqual(response.statusCode, 200);
  t.strictEqual(response.json(), { message: 'Hello, World!' });
});

test('GET `/api/ping` route', async (t) => {
  const fastify = Fastify();
  fastify.register(app);

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/ping'
  });

  t.strictEqual(response.statusCode, 200);
  t.strictEqual(response.json(), { pong: 'it worked!' });
});
