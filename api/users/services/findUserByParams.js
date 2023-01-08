const { User } = require("../../../models");

const findUserByParams = async (searchObject) => {
  return await User.findOne(searchObject);
};

module.exports = findUserByParams;
