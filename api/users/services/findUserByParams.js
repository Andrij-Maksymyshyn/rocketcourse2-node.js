const { User } = require("../../../models");

const findUserByParams = (searchObject) => {
  return User.findOne(searchObject);
};

module.exports = findUserByParams;
