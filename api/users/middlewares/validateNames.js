const { BadRequest } = require("../../../errors/ApiEror");

const validateNames = (req, _, next) => {
  try {
    const neededFirstName = req.body.firstName;
    const neededLastName = req.body.lastName;

    const checkNames = (param1, param2) => {
      if (
        2 > param1.length ||
        param1.length > 12 ||
        2 > param2.length ||
        param2.length > 12
      ) {
        throw new BadRequest(
          "Please, enter correct firstName and (or) lastName (min length: 2 symbols, max length: 12 symbols)"
        );
      }
    };

    if (checkNames(neededFirstName, neededLastName)) {
      next(error);
    }

    if (
      typeof neededFirstName !== "string" ||
      typeof neededLastName !== "string"
    ) {
      throw new BadRequest(
        "Please, enter correct type of name (it's should be a string)"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateNames;
