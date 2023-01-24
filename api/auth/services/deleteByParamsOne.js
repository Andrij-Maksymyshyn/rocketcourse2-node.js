const { Oauth } = require("../../../models");

const deleteOneByParams = (deleteData = {}) => {
  return Oauth.deleteOne(deleteData);
};

module.exports = deleteOneByParams;
