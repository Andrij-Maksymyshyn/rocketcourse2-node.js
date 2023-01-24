const { updateById } = require("../services");

const confirmAccaunt = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    await updateById(userId, { status: "active" });

    res.send("Congratulations, you can log in to your account now");
  } catch (error) {
    next(error);
  }
};

module.exports = confirmAccaunt;
