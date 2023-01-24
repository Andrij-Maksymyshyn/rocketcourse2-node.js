const { sendMail } = require("../../../services");
const { FORGOT_PASSWORD } = require("../../../configs/emailTypes.enum");
const {
  FORGOT_PASSWORD: forgotPasswordAction,
} = require("../../../configs/actionTokenTypes.enum");
const { FRONTEND_URL } = process.env;
const { ganarateActionToken } = require("../../../services");
const { createActionToken } = require("../services");

const sendForgotPasswordEmail = async (req, res, next) => {
  try {
    const user = req.locals.user;

    const forgotPasswordToken = ganarateActionToken(forgotPasswordAction, {
      email: user.email,
    });

    await createActionToken({
      actionType: forgotPasswordAction,
      token: forgotPasswordToken,
      user: req.locals.user._id,
    });

    const forgotPassUrl = `${FRONTEND_URL}/password/forgot?token=${forgotPasswordToken}`;

    await sendMail("andrewmax1984777@gmail.com", FORGOT_PASSWORD, {
      forgotPassUrl,
    });

    res.send("ok");
  } catch (error) {
    next(error);
  }
};

module.exports = sendForgotPasswordEmail;
