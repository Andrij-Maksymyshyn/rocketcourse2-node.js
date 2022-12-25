const getAllUsers = require("./getAllUsers");

const getUserById = async (userId) => {
  const users = await getAllUsers();
  const result = await users.find(({ id }) => id === userId.toString());

  if (!result) {
    return null;
  }

  return result;
};

module.exports = getUserById;
