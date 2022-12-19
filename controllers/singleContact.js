const services = require("../services");

const singleContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await services.getContactById(contactId);

    if (!result) {
      throw new Error(`contact with id = ${contactId} not found`);
    }

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = singleContact;
