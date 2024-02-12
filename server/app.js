const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const xss = require("xss-clean");
const messageRouter = require("./routers/messageRoutes");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(xss());

app.use("/api/v1/message-board", messageRouter);

module.exports = app;
