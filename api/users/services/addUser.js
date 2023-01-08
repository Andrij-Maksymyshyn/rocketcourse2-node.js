const { User } = require("../../../models");

const addUser = async (userObject) => {
  const newUser = await User.create(userObject);

  return newUser;
};

module.exports = addUser;
