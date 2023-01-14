const getMyProfile = (req, res, next) => {
  try {
    const unreadMessage = 5; // DB query simulation
    res.json({
      ...req.user.toObject(),
      additionalData: { unreadMessage },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getMyProfile;
