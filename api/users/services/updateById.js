const getAllUsers = require("./getAllUsers");
const updateUsers = require("./updateUsers");

const updateById = async (id, data) => {
  const users = await getAllUsers();
  const idx = await users.findIndex((user) => user.id === id.toString());

  if (idx === -1) {
    return null;
  }

  users[idx] = { id, ...data };

  await updateUsers(users);

  return users[idx];
};

module.exports = updateById;
