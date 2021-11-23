/**
 * 主应用入口
 * @param fastify 应用实例
 */

async function routes(fastify) {
  const db = fastify.mongo.db;

  /** api */
  fastify.get("/animal", async () => {
    return { hello: "animal" };
  });

  /** mongoDB */
  fastify.get("/todo/add", async () => {
    const collection = db.collection("todos");
    await collection.insertMany([
      {
        subject: "为什么Fastify这么快？",
        datetime: Date.now(),
        state: 0,
      },
      {
        subject: "插入文档",
        datetime: Date.now(),
        state: 1,
      },
      {
        subject: "更新文档",
        datetime: Date.now(),
        state: 0,
      },
      {
        subject: "删除文档",
        datetime: Date.now(),
        state: 0,
      },
    ]);
    return {
      error: "",
      errorCode: 0,
      result: { msg: "insert todo into mongoDB success!" },
    };
  });

  fastify.get("/todo/query", async (req) => {
    const state = +req.query.state || 0;
    const collection = db.collection("todos");
    const result = await collection.findOne({ state });
    return { error: "", errorCode: 0, result };
  });

  /** redis */
  fastify.get("/redis/set", async (request) => {
    console.log(request.query);
    if (!request.query)
      return { error: "401", errorCode: "param key is required" };
    const { redis } = fastify;
    Object.keys(request.query).forEach((key) => {
      redis.set(key, request.query[key]);
    });
    return { error: "", errorCode: 0, result: request.query };
  });

  fastify.get("/redis/get/:key", async (request) => {
    if (!request.params.key)
      return { error: "401", errorCode: "param key is required" };
    const { redis } = fastify;
    let val = await redis.get(request.params.key);
    return { error: "", errorCode: 0, result: val };
  });

  /** MySQL */
  fastify.get("/mysql/insert", async (_req, reply) => {
    fastify.mysql.getConnection((err, connection) => {
      if (err)
        return reply
          .code(500)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(err);
      connection.execute(
        "INSERT INTO todos VALUES (0, 'mysql', '2021-08-10 20:20:20', 0)", // 插入
        (err, result, fields) => {
          console.log("mysql insert>>>", err, result, fields);
          return reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({ result });
        }
      );
    });
  });

  fastify.get("/mysql/query", async (req, reply) => {
    fastify.mysql.getConnection((err, connection) => {
      if (err)
        return reply
          .code(500)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(err);
      connection.query("SELECT * FROM todos", (err, result, fields) => {
        // 查询
        console.log("mysql query>>>", err, result, fields);
        return reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({ result });
      });
    });
  });

  /** levelDB */
  fastify.get("/leveldb/set", async (request) => {
    if (!request.query)
      return { error: "401", errorCode: "param key is required" };
    const level = fastify.level.db;
    Object.keys(request.query).forEach((key) => {
      level.put(key, request.query[key]);
    });
    return { error: "", errorCode: 0, result: request.query };
  });

  fastify.get("/leveldb/get/:key", async (request) => {
    if (!request.params.key)
      return { error: "401", errorCode: "param key is required" };
    const level = fastify.level.db;
    let val = await level.get(request.params.key);
    return { error: "", errorCode: 0, result: val };
  });

  /** elastic search */
  fastify.get("/es/add", async () => {
    let result = await fastify.elastic.index({
      index: "todos", //相当于database
      body: {
        //文档到内容
        subject: "tiger is a danger animal",
        datetime: Date.now(),
        state: 0,
      },
    });
    return result;
  });

  fastify.get("/es/get", async () => {
    let result = await fastify.elastic.search({
      index: "todos",
      type: "todos",
      body: {
        query: {
          match: {
            state: 0,
          },
        },
      },
    });
    return result;
  });
}

module.exports = routes;
