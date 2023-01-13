const { Unauthorized } = require("../../../errors/ApiError");
const { validateToken } = require("../../../services");
const { getByParams } = require("../services");

const authValidateRefreshToken = async (req, _, next) => {
  try {
    const refreshToken = req.get("Authorization");

    if (!refreshToken) {
      throw new Unauthorized("No token");
    }

    validateToken(refreshToken, "refreshToken");

    const tokenWithUser = await getByParams({ refreshToken });

    if (!tokenWithUser) {
      throw new Unauthorized("Invalid token");
    }

    req.user = tokenWithUser.user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authValidateRefreshToken;
