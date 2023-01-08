const { createOauthPair } = require("../services");
const {
  checkPasswords,
  generateAccessTokenPair,
} = require("../../../services");

const loginUser = async (req, res, next) => {
  try {
    const user = req.user.toObject();

    await checkPasswords(user.password, req.body.password);
    const tokenPair = generateAccessTokenPair(user);

    await createOauthPair({ ...tokenPair, user: user._id });
    res.json({ ...tokenPair, user });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
