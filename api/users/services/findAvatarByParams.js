const { Avatar } = require("../../../models");

const findAvatarByParams = (searchData = {}) => {
  return Avatar.find(searchData);
};

module.exports = findAvatarByParams;
