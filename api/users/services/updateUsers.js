const fs = require("node:fs/promises");
const usersPath = require("./usersPath");

const updateUsers = async (users) => {
  await fs.writeFile(usersPath, JSON.stringify(users));
};

module.exports = updateUsers;
