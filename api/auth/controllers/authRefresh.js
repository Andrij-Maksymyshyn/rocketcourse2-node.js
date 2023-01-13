const { createOauthPair } = require("../services");
const { generateAccessTokenPair } = require("../../../services");
const { deleteOneByParamsOne } = require("../services");

const refreshUser = async (req, res, next) => {
  try {
    const user = req.user;

    const accessToken = req.get("Authorization");
    const refreshToken = req.get("Authorization");

    await deleteOneByParamsOne({ accessToken });
    await deleteOneByParamsOne({ refreshToken });

    const tokenPair = generateAccessTokenPair({ ...user.id });

    await createOauthPair({ ...tokenPair, user: user._id });
    res.json({ ...tokenPair, user });
  } catch (error) {
    next(error);
  }
};

module.exports = refreshUser;
