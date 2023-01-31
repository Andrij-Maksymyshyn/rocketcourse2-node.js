const { sendMail } = require("../../../services");
const { WELCOME } = require("../../../configs/emailTypes.enum");
const { findAvatarByParams, updateById } = require("../services");

const getMyProfile = async (req, res, next) => {
  try {
    const unreadMessage = 5; // DB query simulation
    const { _id: userId } = req.user.toObject();

    await sendMail("andrewmax1984777@gmail.com", WELCOME, {
      name: req.user.toObject().firstName,
    });

    const newUserAvatar = await findAvatarByParams({
      user: userId,
    });

    await updateById(userId, {
      avatarUrl: newUserAvatar[newUserAvatar.length - 1].url,
    });

    res.json({
      ...req.user.toObject(),
      additionalData: { unreadMessage },
      avatarUrl: newUserAvatar[newUserAvatar.length - 1].url,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getMyProfile;
