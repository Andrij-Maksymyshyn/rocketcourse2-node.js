const { Oauth } = require("../../../models");

const getByParams = (searchData = {}) => {
  return Oauth.findOne(searchData).populate("user");
};

module.exports = getByParams;
