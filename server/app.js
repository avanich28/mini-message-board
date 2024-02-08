const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const xss = require("xss-clean");
const messageRouter = require("./routers/messageRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const corsConfig = {
  origin: "",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));
app.options("", cors(corsConfig));

app.use(express.json({ limit: "10kb" }));
app.use(xss());

app.use("/api/v1/message-board", messageRouter);

module.exports = app;
