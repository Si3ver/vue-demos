const fastifyPlugin = require("fastify-plugin");

async function redis(fastify) {
  fastify.register(require("fastify-redis"), {
    host: "127.0.0.1",
    port: 6379,
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(redis);
