const { hashPassword } = require("../../../services");
const { updateById } = require("../../users/services");
const { deleteManyByParams } = require("../services");

const setForgotPassword = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;

    const hashedPassword = await hashPassword(req.body.password);
    await updateById(userId, { password: hashedPassword });
    await deleteManyByParams({ user: userId }); // logout from all platforms

    res.send("ok");
  } catch (error) {
    next(error);
  }
};

module.exports = setForgotPassword;
