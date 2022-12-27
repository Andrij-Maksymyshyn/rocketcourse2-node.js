const services = require("../services");
const { Conflict } = require("../../../errors/ApiEror");

const checkIsEmailExists = async (req, _, next) => {
  try {
    const users = await services.getAllUsers();
    const normalizedEmail = req.body.email.toLowerCase();

    const findUserEmail = (newUserEmail) =>
      users.find(({ email }) => email.toLowerCase() === newUserEmail);

    if (findUserEmail(normalizedEmail)) {
      throw new Conflict(
        `Users with email: ${req.body.email} already exist. Please enter another entities.`
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkIsEmailExists;
