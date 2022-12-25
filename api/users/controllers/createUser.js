const services = require("../services");

const createUser = async (req, res, next) => {
  try {
    const result = await services.addUser(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(400).json({
    //   status: "error",
    //   code: 400,
    //   message: "User with req.email is already exist",
    // });
    next(error);
  }
};

module.exports = createUser;
