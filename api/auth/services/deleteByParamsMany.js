const { Oauth } = require("../../../models");

const deleteManyByParamsMany = (deleteData = {}) => {
  return Oauth.deleteMany(deleteData);
};

module.exports = deleteManyByParamsMany;
