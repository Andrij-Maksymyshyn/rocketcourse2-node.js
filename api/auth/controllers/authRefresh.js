const { createOauthPair } = require("../services");
const { generateAccessTokenPair } = require("../../../services");
const { deleteOneByParams } = require("../services");

const refresh = async (req, res, next) => {
  try {
    const user = req.user;

    const refreshToken = req.get("Authorization");

    await deleteOneByParams({ refreshToken });

    const tokenPair = generateAccessTokenPair({ ...user.id });

    await createOauthPair({ ...tokenPair, user: user._id });
    res.json({ ...tokenPair, user });
  } catch (error) {
    next(error);
  }
};

module.exports = refresh;
