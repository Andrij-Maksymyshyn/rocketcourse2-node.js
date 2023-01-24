const {
  hashPassword,
  checkPasswords,
  generateAccessTokenPair,
  ganarateActionToken,
  validateToken,
} = require("./oauthService");
const sendMail = require("./emailService");

module.exports = {
  hashPassword,
  checkPasswords,
  generateAccessTokenPair,
  ganarateActionToken,
  validateToken,
  sendMail,
};
