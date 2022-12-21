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
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Contact with req.id is not existed",
    });
  }
};

module.exports = singleContact;
