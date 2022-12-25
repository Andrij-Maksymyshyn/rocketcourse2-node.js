const services = require("../services");
const ApiError = require("../../../errors/ApiEror");

const checkIsUserExists = async (req, _, next) => {
  try {
    const { userId } = req.params;
    const user = await services.getUserById(userId);

    if (!user) {
      throw new ApiError(`user with id = ${userId} not found`, 404);
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { checkIsUserExists };
