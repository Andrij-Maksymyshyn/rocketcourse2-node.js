const { BadRequest } = require("../../../errors/ApiError");
const {
  IMAGE_MAX_SIZE,
  IMAGE_MIMETYPES,
} = require("../../../configs/file.configs");

const checkUserAvatar = async (req, _, next) => {
  try {
    if (!req.files?.avatarka) {
      throw new BadRequest("No file");
    }

    const { name, size, mimetype } = req.files.avatarka;

    if (size > IMAGE_MAX_SIZE) {
      throw new BadRequest(`File ${name} is too large`);
    }

    if (!IMAGE_MIMETYPES.includes(mimetype)) {
      throw new BadRequest("Not valid file type");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserAvatar;
