const { BadRequest } = require("../../../errors/ApiEror");

const validateAge = (req, _, next) => {
  try {
    const neededAge = req.body.age;
    if (typeof neededAge !== "number") {
      throw new BadRequest(
        "Please, enter correct type of age (it's must be a number)"
      );
    }

    if (neededAge <= 0 || neededAge > 120) {
      throw new BadRequest(
        "Please, enter correct age (min age: > 0, max age: <= 120)"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateAge;
