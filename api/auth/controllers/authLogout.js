const { deleteOneByParams, deleteManyByParams } = require("../services");
const { updateById } = require("../../users/services");
const { sendMail } = require("../../../services");
const { BANNED } = require("../../../configs/emailTypes.enum");

const logoutUser = async (req, res, next) => {
  try {
    const accessToken = req.get("Authorization");
    const { _id: userId } = req.user;

    await updateById(userId, { status: "pending" });
    await deleteOneByParams({ accessToken });
    await sendMail("andrewmax1984777@gmail.com", BANNED);

    // logout all users
    // await deleteManyByParams({ user: req.user._id });
    res.send("Your accaunt is banned! P.S. Admin");
  } catch (error) {
    next(error);
  }
};

module.exports = logoutUser;
