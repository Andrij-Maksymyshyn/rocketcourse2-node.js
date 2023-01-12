const { Oauth } = require("../../../models");

const deleteOneByParamsOne = (deleteData = {}) => {
  return Oauth.deleteOne(deleteData);
};

module.exports = deleteOneByParamsOne;
