const { deleteOneByParams, deleteManyByParams } = require("../services");
const { updateById } = require("../../users/services");
const { NO_CONTENT } = require("../../../errors/errorCodes");

const logoutUser = async (req, res, next) => {
  try {
    const accessToken = req.get("Authorization");
    const { _id: userId } = req.user;

    await updateById(userId, { status: "pending" });
    await deleteOneByParams({ accessToken });

    // logout all users
    // await deleteManyByParams({ user: userId });
    res.status(NO_CONTENT).json();
  } catch (error) {
    next(error);
  }
};

module.exports = logoutUser;
