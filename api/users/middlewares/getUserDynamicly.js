const services = require("../services");
const { NotFound } = require("../../../errors/ApiError");

const getUserDynamicly =
  (paramName, from, dbField = paramName) =>
  async (req, _, next) => {
    try {
      const searchData = req[from][paramName];

      const user = await services.findUserByParams({ [dbField]: searchData });

      if (!user) {
        throw new NotFound("User not found");
      }

      req.user = user;

      next();
    } catch (error) {
      next(error);
    }
  };

module.exports = getUserDynamicly;
