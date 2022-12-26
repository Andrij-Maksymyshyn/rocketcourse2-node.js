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
    next(error);
  }
};

module.exports = updateUser;
