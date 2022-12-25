const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const mainRouter = require("./routes/mainRouter");
const ApiError = require("./errors/ApiEror");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("*", notFoundError);
app.use(mainErrorHandler);

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

function notFoundError(_, _, next) {
  next(new ApiError("Route not found", 404));
}

function mainErrorHandler(err, _, res, _) {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Unknown error" });
}
