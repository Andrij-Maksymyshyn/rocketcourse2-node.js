const { Unauthorized } = require("../../../errors/ApiError");
const { validateAccessToken } = require("../../../services");
const { getByParams } = require("../services");

const authValidateAccessToken = async (req, _, next) => {
  try {
    const accessToken = req.get("Authorization");

    if (!accessToken) {
      throw new Unauthorized("No token");
    }

    validateAccessToken(accessToken);

    const tokenWithUser = await getByParams({ accessToken });

    if (!tokenWithUser) {
      throw new Unauthorized("Invalid token");
    }

    req.user = tokenWithUser.user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authValidateAccessToken;
