const services = require("../services");

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await services.updateById(userId, req.body);

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

module.exports = updateUser;
