const fs = require("node:fs/promises");
const contactsPath = require("./contactsPath");

const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const parsedAllContacts = JSON.parse(data);

  return parsedAllContacts;
};

module.exports = getAllContacts;
