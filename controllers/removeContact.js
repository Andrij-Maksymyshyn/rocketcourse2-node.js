const services = require("../services");

const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const result = await services.deleteById(contactId);

    if (!result) {
      throw new Errror(`Contact with id = ${contactId} not found`);
    }

    //   res.status(204).json();
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
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

module.exports = removeContact;
