const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const addContact = async ({ name, email, phone }) => {
  const contacts = await getAllContacts();

  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};

module.exports = addContact;
