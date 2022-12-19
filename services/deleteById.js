const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const deleteById = async (id) => {
  const contacts = await getAllContacts();
  const idx = await contacts.findIndex(
    (contact) => contact.id === id.toString()
  );

  if (idx === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(idx, 1);

  await updateContacts(contacts);

  return removedContact;
};

module.exports = deleteById;
