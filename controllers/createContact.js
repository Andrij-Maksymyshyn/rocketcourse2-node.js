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
    console.log(error.message);
  }
};

module.exports = createContact;
