const { createOauthPair, createActionToken } = require("../services");
const {
  checkPasswords,
  generateAccessTokenPair,
  sendMail,
  ganarateActionToken,
} = require("../../../services");
const { CONFIRM, INVITATION } = require("../../../configs/emailTypes.enum");
const { CONFIRM_ACCAUNT } = require("../../../configs/actionTokenTypes.enum");
const { Unauthorized } = require("../../../errors/ApiError");
const { FRONTEND_URL } = process.env;

const loginUser = async (req, res, next) => {
  try {
    const user = req.locals.user;

    if (user.status === "active") {
      await sendMail("andrewmax1984777@gmail.com", INVITATION);
      await checkPasswords(user.password, req.body.password);

      const tokenPair = generateAccessTokenPair({ ...user });

      await createOauthPair({ ...tokenPair, user: user._id });
      res.json({ ...tokenPair, user });
    }

    if (user.status === "pending") {
      const confirmAccauntToken = ganarateActionToken(CONFIRM_ACCAUNT, {
        email: user.email,
      });

      await createActionToken({
        actionType: CONFIRM_ACCAUNT,
        token: confirmAccauntToken,
        user: req.locals.user._id,
      });

      const confirmAccauntUrl = `${FRONTEND_URL}/user/password/confirm?token=${confirmAccauntToken}`;

      await sendMail("andrewmax1984777@gmail.com", CONFIRM, {
        confirmAccauntUrl,
      });

      throw new Unauthorized(
        "Accaunt is not activated. Please, confirm your accaunt!"
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
