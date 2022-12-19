const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const updateById = async (id, data) => {
  const contacts = await getAllContacts();
  const idx = await contacts.findIndex(
    (contact) => contact.id === id.toString()
  );

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id, ...data };

  await updateContacts(contacts);

  return contacts[idx];
};

module.exports = updateById;
