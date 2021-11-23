const fastifyPlugin = require("fastify-plugin");

async function elasticsearch(fastify) {
  fastify.register(require("fastify-elasticsearch"), {
    node: "http://192.168.1.117:9200",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(elasticsearch);
