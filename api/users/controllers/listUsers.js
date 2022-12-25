const services = require("../services");

const listUsers = async (_, res, next) => {
  try {
    const result = await services.getAllUsers();

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(400).json({
    //   status: "error",
    //   code: 400,
    //   message: "error.message",
    // });
    next(error);
  }
};

module.exports = listUsers;
