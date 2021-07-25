const express = require("express");
const cors = require("cors");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000; // 用于接口通信
let cmd;
let isRunning = false;

app.use(cors());
app.use(express.json());

/** /run */
app.post("/run", (req, res) => {
  console.log("Run");
  const data = new Uint8Array(Buffer.from(req.body.content));
  fs.writeFileSync(path.resolve("src", "components", "Demo.vue"), data);
  console.log(`isRunning: ${isRunning}`);
  if (isRunning) {
    res.send("Already started!");
    return;
  }
  cmd = cp.spawn("npm", ["run", "serve", "--", "--port", "3001"]); // 启动vue项目 3001

  cmd.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    if (!isRunning && data.includes("http://localhost")) {
      isRunning = true;
      res.send("Started!");
    }
  });

  cmd.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  cmd.on("error", (err) => {
    console.log(`child process exited with err ${err}`);
  });

  cmd.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.post("/kill", (_req, res) => {
  console.log("Run");
  res.send("POST request to the homepage");
});

/** /update */
app.post("/update", (req, res) => {
  console.log("Update", req.body);
  const data = new Uint8Array(Buffer.from(req.body.content));
  fs.writeFileSync(path.resolve("src", "components", "Demo.vue"), data); // 修改源码 Demo.vue，触发webpack重新编译
  res.send("Updated!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
