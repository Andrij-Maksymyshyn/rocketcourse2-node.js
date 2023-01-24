const {
  WELCOME,
  BANNED,
  FORGOT_PASSWORD,
  CONFIRM,
  INVITATION,
} = require("../configs/emailTypes.enum");

module.exports = {
  [WELCOME]: {
    templateName: "welcome",
    subject: "Welcome on board",
  },
  [BANNED]: {
    templateName: "banned",
    subject: "Account was blocked",
  },
  [FORGOT_PASSWORD]: {
    templateName: "forgotPassword",
    subject: "Forgot password",
  },
  [CONFIRM]: {
    templateName: "confirmAccaunt",
    subject: "Confirm accaunt",
  },
  [INVITATION]: {
    templateName: "invitation",
    subject: "Congratulations on your account",
  },
};
