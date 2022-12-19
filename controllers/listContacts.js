const services = require("../services");

const listContacts = async (_, res) => {
  try {
    const result = await services.getAllContacts();

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

module.exports = listContacts;
