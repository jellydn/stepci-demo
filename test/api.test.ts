import fastify from 'fastify';
import assert from 'assert';

const app = fastify();

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
