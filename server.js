const express = require("express");
const helmet = require("helmet");
const postRouter = require("./routers/postRouter.js");
const commentRouter = require("./routers/commentRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/posts", postRouter, commentRouter);

module.exports = server;
