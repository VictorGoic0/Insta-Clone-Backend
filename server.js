const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const postRouter = require("./routers/postRouter.js");
const commentRouter = require("./routers/commentRouter.js");
const profileRouter = require("./routers/profileRouter.js");
const authRouter = require("./routers/authRouter.js");
const authorization = require("./routers/authorization");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/posts", postRouter, commentRouter);
server.use("/api/profiles", authorization, profileRouter);
server.use("/auth", authRouter);

module.exports = server;
