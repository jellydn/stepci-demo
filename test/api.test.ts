import fastify from 'fastify';

const app = fastify();

// Test for GET /api
app.inject({
  method: 'GET',
  url: '/api'
}, (err, response) => {
  console.log(response.statusCode) // 200
  console.log(response.headers['content-type']) // 'application/json; charset=utf-8'
});

// Test for GET /api/hello
app.inject({
  method: 'GET',
  url: '/api/hello'
}, (err, response) => {
  console.log(response.statusCode) // 200
  console.log(response.headers['content-type']) // 'application/json; charset=utf-8'
});

// Test for GET /api/ping
app.inject({
  method: 'GET',
  url: '/api/ping'
}, (err, response) => {
  console.log(response.statusCode) // 200
  console.log(response.headers['content-type']) // 'application/json; charset=utf-8'
});

app.close();
