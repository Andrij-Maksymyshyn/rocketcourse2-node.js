const { validateToken } = require("../../../services");
const {
  findActionTokenByParams,
  deleteActionTokenByParams,
} = require("../../auth/services");
const { Unauthorized } = require("../../../errors/ApiError");

const validateActionConfirmToken = (actionType) => async (req, res, next) => {
  try {
    const token = req.get("Authorization");

    if (!token) {
      throw new Unauthorized("No token");
    }

    validateToken(token, "confirmToken");

    const actionTokenWithUser = await findActionTokenByParams({
      token,
      actionType,
    });

    if (!actionTokenWithUser) {
      throw new Unauthorized("Invalid token");
    }

    req.user = actionTokenWithUser.user;
    await deleteActionTokenByParams({ token });

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateActionConfirmToken;
