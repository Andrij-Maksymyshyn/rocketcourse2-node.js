const services = require("../services");

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await services.updateById(userId, req.body);

    if (!result) {
      throw new Error(`user with id = ${userId} not found`);
    }

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(404).json({
    //   status: "error",
    //   code: 404,
    //   message: "User with req.id is not existed",
    // });
    next(error);
  }
};

module.exports = updateUser;
