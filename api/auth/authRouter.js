const authRouter = require("express").Router();
const { loginUser } = require("./controllers");
const { getUserDynamicly } = require("../users/middlewares");

authRouter.post("/", getUserDynamicly("email", "body"), loginUser);

module.exports = authRouter;
