const getAllContacts = require("./getAllContacts");

const getContactById = async (contactId) => {
  const contacts = await getAllContacts();
  const result = await contacts.find(({ id }) => id === contactId.toString());

  if (!result) {
    return null;
  }

  return result;
};

module.exports = getContactById;
