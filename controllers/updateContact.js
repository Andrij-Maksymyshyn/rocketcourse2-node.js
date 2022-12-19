const services = require("../services");

const updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await services.updateById(contactId, req.body);

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

module.exports = updateContact;
