const singleUser = (req, res, next) => {
  try {
    const result = req.locals.user;

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = singleUser;
