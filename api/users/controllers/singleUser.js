const singleUser = async (req, res, next) => {
  try {
    const result = req.user;

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    // res.status(404).json({
    //   status: "error",
    //   code: 404,
    //   message: "User with req.id is not existed",
    // });
    next(error);
  }
};

module.exports = singleUser;
