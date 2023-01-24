const { sendMail } = require("../../../services");
const { WELCOME } = require("../../../configs/emailTypes.enum");

const getMyProfile = async (req, res, next) => {
  try {
    const unreadMessage = 5; // DB query simulation

    await sendMail("andrewmax1984777@gmail.com", WELCOME, {
      name: req.user.toObject().firstName,
    });

    res.json({
      ...req.user.toObject(),
      additionalData: { unreadMessage },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getMyProfile;
