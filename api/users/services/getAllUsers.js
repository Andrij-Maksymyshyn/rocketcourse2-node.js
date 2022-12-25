const fs = require("node:fs/promises");
const usersPath = require("./usersPath");

const getAllUsers = async () => {
  const data = await fs.readFile(usersPath);
  const parsedAllUsers = JSON.parse(data);

  return parsedAllUsers;
};

module.exports = getAllUsers;
