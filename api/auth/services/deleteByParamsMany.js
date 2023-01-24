const { Oauth } = require("../../../models");

const deleteManyByParams = (deleteData = {}) => {
  return Oauth.deleteMany(deleteData);
};

module.exports = deleteManyByParams;
