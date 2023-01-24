const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  FORGOT_PASSWORD_SECRET,
  CONFIRM_ACCAUNT_SECRET,
} = process.env;
const {
  FORGOT_PASSWORD,
  CONFIRM_ACCAUNT,
} = require("../configs/actionTokenTypes.enum");
const { BadRequest, ServerError } = require("../errors/ApiError");

const hashPassword = (password) => bcrypt.hash(password, 10);

const checkPasswords = async (hashedPassword, password) => {
  const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

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

const ganarateActionToken = (actionType, encodeData = {}) => {
  let expiresIn = "";
  let secretWord = "";

  switch (actionType) {
    case FORGOT_PASSWORD:
      expiresIn = "24h";
      secretWord = FORGOT_PASSWORD_SECRET;
      break;

    case CONFIRM_ACCAUNT:
      expiresIn = "14h";
      secretWord = CONFIRM_ACCAUNT_SECRET;
      break;

    default:
      throw new ServerError("Wrong action type");
  }

  return jwt.sign(encodeData, secretWord, { expiresIn });
};

const validateToken = (token = "", tokenType = "") => {
  switch (tokenType) {
    case "accessToken":
      tokenType = ACCESS_TOKEN_SECRET;
      break;

    case "refreshToken":
      tokenType = REFRESH_TOKEN_SECRET;
      break;

    case "forgotToken":
      tokenType = FORGOT_PASSWORD_SECRET;
      break;

    case "confirmToken":
      tokenType = CONFIRM_ACCAUNT_SECRET;
      break;

    default:
      throw new BadRequest(error.message || "Invalid token (signature)");
  }

  return jwt.verify(token, tokenType);
};

module.exports = {
  hashPassword,
  checkPasswords,
  generateAccessTokenPair,
  ganarateActionToken,
  validateToken,
};
