const services = require("../services");

const removeUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await services.deleteById(userId);

    if (!result) {
      throw new Errror(`User with id = ${userId} not found`);
    }

    //   res.status(204).json();
    res.json({
      status: "success",
      code: 200,
      message: "user deleted",
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

module.exports = removeUser;
