const { User } = require("../../../models");

const addUser = async ({ firstName, lastName, email, age }) => {
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    age,
  });

  return newUser;
};

module.exports = addUser;
