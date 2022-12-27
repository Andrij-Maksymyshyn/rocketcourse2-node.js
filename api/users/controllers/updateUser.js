const services = require("../services");
const { NotFound } = require("../../../errors/ApiEror");

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await services.updateById(userId, req.body);

    if (!result) {
      throw new NotFound(`user with id = ${userId} not found`);
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
