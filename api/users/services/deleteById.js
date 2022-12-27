const { User } = require("../../../models");

const deleteById = async (id) => {
  const removedUser = await User.findByIdAndRemove(id);

  if (!removedUser) {
    return null;
  }

  return removedUser;
};

module.exports = deleteById;
