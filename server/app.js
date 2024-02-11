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

// const corsOpts = {
//   origin: "*",
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOpts));
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
// app.options("/api/v1/message-board", cors());
// app.use(cors({ origin: true }));
app.use(cors());
app.options("*", cors());
app.use(xss());

app.use("/api/v1/message-board", messageRouter);

module.exports = app;
