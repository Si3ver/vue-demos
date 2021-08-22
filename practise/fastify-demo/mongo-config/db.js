#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const mongodb = require("mongodb");
const { program } = require("commander");
const inquirer = require("inquirer");

function startUp() {
  program
    .option("-f, --config <path>", "specify config.json")
    .option("-s, --slient", "slient with no confirmation");

  program.parse(process.argv);
  const options = program.opts();
  let config = {};
  console.log(options);
  if (!options.config) {
    const filepath = path.join(process.cwd(), "config.json");
    if (fs.existsSync(filepath)) {
      config.configFile = filepath;
    } else {
      program.showHelpAfterError();
      return;
    }
  } else {
    config.configFile = options.config;
  }
  config.slient = options.slient ? true : false;
  doInit(config);
}

async function doInit(config) {
  const CONFIG = require(config.configFile);
  let client = await mongodb.MongoClient.connect(CONFIG.url);
  for (let dbconfig of CONFIG.data) {
    let answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "isCreate",
        message: `create Database [${dbconfig.name}]?`,
        default: true,
      },
    ]);
    if (answers.isCreate) {
      await createDataBase(client, dbconfig);
    }
  }
  process.exit(0);
}

async function createDataBase(client, dbconfig) {
  let logs = [];
  let newdb = client.db(dbconfig.name);
  const { user, passwd, role, db } = dbconfig.user;
  try {
    await newdb.addUser(user, passwd, {
      roles: [{ role, db }],
    });
  } catch (err) {
    console.warn("❎ user already exist");
  }

  for (let col of dbconfig.collections) {
    if (!newdb.collection(col.name)) {
      let collection = await newdb.createCollection(col.name);
      collection.insertMany(col.docs);
    }
  }
  logs.push(`✅ success`);
  logs.push(`✅ database [${dbconfig.name}] created!`);
  logs.push(`✅ user [${JSON.stringify({ user, passwd, role, db })}] created!`);
  logs.push(`✅ collection [${JSON.stringify(dbconfig.collections)}] created!`);
  console.log(logs.join("\n"));
}

startUp();
