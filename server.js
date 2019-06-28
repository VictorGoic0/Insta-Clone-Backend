const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const postRouter = require("./routers/postRouter.js");
const commentRouter = require("./routers/commentRouter.js");
const likesRouter = require("./routers/likesRouter.js");
const profileRouter = require("./routers/profileRouter.js");
const authRouter = require("./routers/authRouter.js");
const authorization = require("./routers/authorization");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/posts", postRouter, commentRouter);
server.use("/api/profiles", authorization, profileRouter);
server.use("/api/likes", authorization, likesRouter);
server.use("/auth", authRouter);
server.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "This is not a valid endpoint! Try /api/posts if you would like to see a list of posts."
    );
});

module.exports = server;
