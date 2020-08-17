const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors);

// server.use("/api/auth");

server.get("/", (req, res) => {
    const message = process.env.MESSAGE || "Hello from code"
  res.status(200).json({ message, database: process.env.DB_NAME });
});

module.exports = server;
