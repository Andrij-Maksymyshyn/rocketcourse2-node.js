const createOauthPair = require("./authService");
const getByParams = require("./getByParams");
const deleteOneByParamsOne = require("./deleteByParamsOne");
const deleteManyByParamsMany = require("./deleteByParamsMany");

module.exports = {
  createOauthPair,
  getByParams,
  deleteOneByParamsOne,
  deleteManyByParamsMany,
};
