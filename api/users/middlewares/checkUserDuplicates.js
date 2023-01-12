const services = require("../services");
const { NotFound } = require("../../../errors/ApiError");

const checkUserDuplicates =
  (paramName, from, dbField = paramName) =>
  async (req, _, next) => {
    try {
      const searchData = req[from][paramName];

      const user = await services.findUserByParams({ [dbField]: searchData });

      if (user) {
        throw new NotFound("User with such email already exists");
      }

      req.user = user;

      next();
    } catch (error) {
      next(error);
    }
  };

module.exports = checkUserDuplicates;
