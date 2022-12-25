const getAllUsers = require("./getAllUsers");
const updateUsers = require("./updateUsers");

const deleteById = async (id) => {
  const users = await getAllUsers();
  const idx = await users.findIndex((user) => user.id === id.toString());

  if (idx === -1) {
    return null;
  }

  const [removedUser] = users.splice(idx, 1);

  await updateUsers(users);

  return removedUser;
};

module.exports = deleteById;
