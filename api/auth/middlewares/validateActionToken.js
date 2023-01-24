const { validateToken } = require("../../../services");
const {
  findActionTokenByParams,
  deleteActionTokenByParams,
} = require("../services");
const { Unauthorized } = require("../../../errors/ApiError");

const validateActionToken = (actionType) => async (req, _, next) => {
  try {
    const token = req.get("Authorization");

    if (!token) {
      throw new Unauthorized("No token");
    }

    validateToken(token, "forgotToken");

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

module.exports = validateActionToken;
