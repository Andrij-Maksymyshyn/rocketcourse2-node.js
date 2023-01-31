const { uploadFileToS3 } = require("../../../services");
const { Avatar } = require("../../../models");

const uploadUserAvatar = async (req, res, next) => {
  try {
    const important = await uploadFileToS3(
      req.files.avatarka,
      req.params.userId,
      "user"
    );

    await Avatar.create({
      url: important?.Location,
      user: req.params.userId,
    });

    res.send(important);
  } catch (error) {
    next(error);
  }
};

module.exports = uploadUserAvatar;
