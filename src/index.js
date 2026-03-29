const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const app = new Hono();
app.get('/', (c) => c.text('Hello World'));
serve({ fetch: app.fetch, port: 3000, hostname: '0.0.0.0' });
