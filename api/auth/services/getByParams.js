const { Oauth } = require("../../../models");

const getByParams = (searchData = {}) => {
  return Oauth.findOne(searchData);
};

module.exports = getByParams;
