const getMyProfile = (req, res, next) => {
  try {
    const unreadMessage = 5; // DB query simulation
    res.json({
      ...req.user.toObject(),
      additionalData: { unreadMessage },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getMyProfile;
