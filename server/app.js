const express = require("express");
const morgan = require("morgan");
const messageRouter = require("./routers/messageRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/message-board", messageRouter);

module.exports = app;
