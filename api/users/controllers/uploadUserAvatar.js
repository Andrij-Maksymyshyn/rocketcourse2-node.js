const { uploadFileToS3 } = require("../../../services");

const uploadUserAvatar = async (req, res, next) => {
  try {
    console.log("------------------------------");
    console.log(req.files.avatarka);
    console.log("------------------------------");

    const important = await uploadFileToS3(req.files.avatarka);

    res.send(important);
  } catch (error) {
    next(error);
  }
};

module.exports = uploadUserAvatar;
