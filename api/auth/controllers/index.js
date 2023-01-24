const loginUser = require("./authLogin");
const logoutUser = require("./authLogout");
const refresh = require("./authRefresh");
const sendForgotPasswordEmail = require("./sendForgotPasswordEmail");
const setForgotPassword = require("./setForgotPassword");

module.exports = {
  loginUser,
  logoutUser,
  refresh,
  sendForgotPasswordEmail,
  setForgotPassword,
};
