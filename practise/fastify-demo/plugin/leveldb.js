const fastifyPlugin = require("fastify-plugin");

async function leveldb(fastify) {
  fastify.register(require("fastify-leveldb"), {
    name: "todos",
    path: "../data/",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(leveldb);
