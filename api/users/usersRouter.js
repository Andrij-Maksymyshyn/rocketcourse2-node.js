const controllers = require("./controllers");
const {
  getUserDynamicly,
  validateUser,
  checkUserDuplicates,
  checkUserAvatar,
} = require("./middlewares");
const { validateActionConfirmToken } = require("./middlewares");
const { authValidateAccessToken } = require("../auth/middlewares");
const { objectIdValidator } = require("../../unitedMiddlewares");
const { CONFIRM_ACCAUNT } = require("../../configs/actionTokenTypes.enum");

const usersRouter = require("express").Router();

usersRouter.get("/", controllers.listUsers);

usersRouter.get("/profile", authValidateAccessToken, controllers.getMyProfile);

usersRouter.post(
  "/",
  validateUser,
  checkUserDuplicates("email", "body"),
  controllers.createUser
);

usersRouter.patch(
  "/user/confirm",
  validateActionConfirmToken(CONFIRM_ACCAUNT),
  controllers.confirmAccaunt
);

usersRouter.use(
  "/:userId",
  objectIdValidator("userId"),
  getUserDynamicly("userId", "params", "_id")
);

usersRouter.get("/:userId", controllers.singleUser);

usersRouter.put("/:userId", controllers.updateUser);

usersRouter.delete("/:userId", controllers.removeUser);

usersRouter.post(
  "/:userId/avatar",
  checkUserAvatar,
  controllers.uploadUserAvatar
);

module.exports = usersRouter;
