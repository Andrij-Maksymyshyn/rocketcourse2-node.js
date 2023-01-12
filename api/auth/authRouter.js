const authRouter = require("express").Router();
const { loginUser, logoutUser, refreshUser } = require("./controllers");
const { getUserDynamicly } = require("../users/middlewares");
const {
  authValidateAccessToken,
  authValidateRefreshToken,
} = require("./middlewares");

authRouter.post("/", getUserDynamicly("email", "body"), loginUser);
authRouter.post("/logout", authValidateAccessToken, logoutUser);
authRouter.post("/refresh", authValidateRefreshToken, refreshUser);

module.exports = authRouter;
