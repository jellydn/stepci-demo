import fastify from 'fastify';
import { expect, test } from "bun:test";
import server from '../server';

// Test for GET /api
test('GET /api', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/api'
  });
  expect(response.statusCode).toBe(200);
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
});

// Test for GET /api/hello
test('GET /api/hello', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/api/hello'
  });
  expect(response.statusCode).toBe(200);
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
});

// Test for GET /api/ping
test('GET /api/ping', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/api/ping'
  });
  expect(response.statusCode).toBe(200);
  expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
});

import server from '../server';

// Test for GET /api
app.inject({
  method: 'GET',
  url: '/api'
}, (err, response) => {
  if (err) { console.error(err); assert.fail(err); }
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
});

// Test for GET /api/hello
app.inject({
  method: 'GET',
  url: '/api/hello'
}, (err, response) => {
  if (err) { console.error(err); assert.fail(err); }
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
});

// Test for GET /api/ping
app.inject({
  method: 'GET',
  url: '/api/ping'
}, (err, response) => {
  if (err) { console.error(err); assert.fail(err); }
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
});

app.close().catch((err) => console.error(err));

app.close().catch((err) => console.error(err));
