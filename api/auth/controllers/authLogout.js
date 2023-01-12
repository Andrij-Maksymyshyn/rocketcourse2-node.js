const { deleteOneByParamsOne, deleteManyByParamsMany } = require("../services");
const { NO_CONTENT } = require("../../../errors/errorCodes");

const logoutUser = async (req, res, next) => {
  try {
    const accessToken = req.get("Authorization");
    await deleteOneByParamsOne({ accessToken });

    // logout all users
    // await deleteManyByParamsMany({ user: req.user._id });
    res.status(NO_CONTENT).json();
  } catch (error) {
    next(error);
  }
};

module.exports = logoutUser;
