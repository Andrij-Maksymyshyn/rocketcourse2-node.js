const services = require("../services");

const createContact = async (req, res) => {
  try {
    const result = await services.addContact(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "Contact with req.email is already exist",
    });
  }
};

module.exports = createContact;
