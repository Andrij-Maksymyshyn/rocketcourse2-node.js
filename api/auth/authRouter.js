const authRouter = require("express").Router();
const {
  loginUser,
  logoutUser,
  refresh,
  sendForgotPasswordEmail,
  setForgotPassword,
} = require("./controllers");
const { getUserDynamicly } = require("../users/middlewares");
const {
  authValidateAccessToken,
  authValidateRefreshToken,
  validateActionToken,
} = require("./middlewares");
const { FORGOT_PASSWORD } = require("../../configs/actionTokenTypes.enum");

authRouter.post("/logout", authValidateAccessToken, logoutUser);
authRouter.post("/refresh", authValidateRefreshToken, refresh);
authRouter.patch(
  "/password/forgot",
  validateActionToken(FORGOT_PASSWORD),
  setForgotPassword
);

authRouter.use(getUserDynamicly("email", "body"));
authRouter.post("/", loginUser);
authRouter.post("/password/forgot", sendForgotPasswordEmail);

module.exports = authRouter;
