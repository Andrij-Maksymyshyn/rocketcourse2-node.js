const { ActionToken } = require("../../../models");

const findActionTokenByParams = (searchData = {}) => {
  return ActionToken.findOne(searchData);
};

module.exports = findActionTokenByParams;
