const { ActionToken } = require("../../../models");

const deleteActionTokenByParams = (deleteData = {}) => {
  return ActionToken.deleteOne(deleteData);
};

module.exports = deleteActionTokenByParams;
