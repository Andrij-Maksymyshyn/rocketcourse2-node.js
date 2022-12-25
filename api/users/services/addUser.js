const getAllUsers = require("./getAllUsers");
const updateUsers = require("./updateUsers");

const addUser = async ({ name, email, phone }) => {
  const users = await getAllUsers();

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };

  const normalizedEmail = newUser.email.toLowerCase();

  const findUserEmail = (newUserEmail) =>
    users.find(({ email }) => email.toLowerCase() === newUserEmail);

  if (findUserEmail(normalizedEmail)) {
    throw new Error(
      `Users with email: ${email} already exist. Please enter another entities.`
    );
  }

  users.push(newUser);

  await updateUsers(users);

  return newUser;
};

module.exports = addUser;
