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
    next(error);
  }
};

module.exports = createUser;
