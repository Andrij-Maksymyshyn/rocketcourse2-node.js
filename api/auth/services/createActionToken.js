const { ActionToken } = require("../../../models");

const createActionToken = (tokenData = {}) => {
  return ActionToken.create(tokenData);
};

module.exports = createActionToken;
