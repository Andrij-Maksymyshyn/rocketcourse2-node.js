const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const { BadRequest, Unauthorized } = require("../errors/ApiError");

const hashPassword = (password) => bcrypt.hash(password, 10);

const checkPasswords = async (hashedPassword, password) => {
  const isPasswordEquals = await bcrypt.compare(hashedPassword, password);

  if (!isPasswordEquals) {
    throw new BadRequest("Email or password is wrong");
  }
};

const generateAccessTokenPair = (encodeData = {}) => {
  const accessToken = jwt.sign(encodeData, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(encodeData, REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

const validateToken = () => {};

const validateAccessToken = (accessToken = "") => {
  try {
    return jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
  } catch (e) {
    throw new Unauthorized(e.message || "Invalid token");
  }
};

module.exports = {
  hashPassword,
  checkPasswords,
  generateAccessTokenPair,
  validateToken,
  validateAccessToken,
};
