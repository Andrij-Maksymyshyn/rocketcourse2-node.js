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

  const normalizedEmail = newContact.email.toLowerCase();

  const findContactEmail = (newContactEmail) =>
    contacts.find(({ email }) => email.toLowerCase() === newContactEmail);

  if (findContactEmail(normalizedEmail)) {
    throw new Error(
      `Contact with email: ${email} already exist. Please enter another entities.`
    );
  }

  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};

module.exports = addContact;
