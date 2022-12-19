const fs = require("node:fs/promises");
const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

module.exports = updateContacts;
