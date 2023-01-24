const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("morgan");

global.rootPath = __dirname;
const mainRouter = require("./routes/mainRouter");
const { NotFound } = require("./errors/ApiError");
const { SERVER_ERROR } = require("./errors/errorCodes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("*", notFoundError);
app.use(mainErrorHandler);

const { DB_HOST, PORT = 5000 } = process.env;

mongoose
  .set("debug", true)
  .set("strictQuery", true)
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(
      `Database connection successful. Server running. Use our API on port: ${PORT}`
    )
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

function notFoundError(_, _, next) {
  next(new NotFound("Route not found"));
}

function mainErrorHandler(err, _, res, _) {
  res
    .status(err.status || SERVER_ERROR)
    .json({ message: err.message || "Unknown error" });
}
