const getAllUsers = require("./getAllUsers");
const addUser = require("./addUser");
const updateById = require("./updateById");
const deleteById = require("./deleteById");
const findUserByParams = require("./findUserByParams");
const findAvatarByParams = require("./findAvatarByParams");

module.exports = {
  getAllUsers,
  addUser,
  updateById,
  deleteById,
  findUserByParams,
  findAvatarByParams,
};
