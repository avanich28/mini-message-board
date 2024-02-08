const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

const port = process.env.PORT || 3000;
const server = app.listen(
  "https://mini-message-board-55v75hbws-jobs-projects-957cdab4.vercel.app/",
  () => {
    console.log(`App running on port: http://localhost:${port}`);
  }
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: 💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
