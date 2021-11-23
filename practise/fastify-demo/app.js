const path = require("path");

const fastify = require("fastify")({
  logger: {
    level: "info",
    file: path.join(__dirname, "logs/logs.txt"),
  },
});

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/", // optional: default '/'
});

//setup mysql
fastify.register(require("./plugin/mysql"));
//setup mongodb
fastify.register(require("./plugin/mongo"));
//setup redis
fastify.register(require("./plugin/redis"));
//setup leveldb
fastify.register(require("./plugin/leveldb"));
// setup elasticsearch
fastify.register(require("./plugin/elasticsearch"));
//setup websocket
// fastify.register(require("fastify-ws"));
//setup schedule
fastify.register(require("fastify-schedule"));

// setup router
fastify.register(require("./routers/index"));

const start = async () => {
  try {
    console.log("start");
    await fastify.listen(9700);
    console.log("start at http://localhost:9700");

    //start websocket
    // fastify.ws.on("connection", (socket) => {
    //   console.log("Client connected.");
    //   socket.on("message", (msg) => socket.send(msg)); // Creates an echo server
    //   socket.on("close", () => console.log("Client disconnected."));
    // });
  } catch (err) {
    console.log(err);
    fastify.log.error(err);
    // process.exit(1);
  }
};
start();
