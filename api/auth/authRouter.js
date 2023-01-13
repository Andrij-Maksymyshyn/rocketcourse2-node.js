const authRouter = require("express").Router();
const { loginUser, logoutUser, refresh } = require("./controllers");
const { getUserDynamicly } = require("../users/middlewares");
const {
  authValidateAccessToken,
  authValidateRefreshToken,
} = require("./middlewares");

authRouter.post("/", getUserDynamicly("email", "body"), loginUser);
authRouter.post("/logout", authValidateAccessToken, logoutUser);
authRouter.post("/refresh", authValidateRefreshToken, refresh);

module.exports = authRouter;
