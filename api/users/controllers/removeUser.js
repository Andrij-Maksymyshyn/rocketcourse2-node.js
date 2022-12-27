const services = require("../services");
const { NotFound } = require("../../../errors/ApiEror");

const removeUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await services.deleteById(userId);

    if (!result) {
      throw new NotFound(`User with id = ${userId} not found`);
    }

    //   res.status(204).json();
    res.json({
      status: "success",
      code: 200,
      message: "user deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeUser;
