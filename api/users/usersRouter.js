const controllers = require("./controllers");
const {
  getUserDynamicly,
  validateUser,
  checkUserDuplicates,
} = require("./middlewares");
const { authValidateAccessToken } = require("../auth/middlewares");
const { objectIdValidator } = require("../../unitedMiddlewares");
const usersRouter = require("express").Router();

usersRouter.get("/", controllers.listUsers);

usersRouter.post(
  "/",
  validateUser,
  checkUserDuplicates("email", "body"),
  controllers.createUser
);

usersRouter.get("/profile", authValidateAccessToken, controllers.getMyProfile);

usersRouter.use(
  "/:userId",
  objectIdValidator("userId"),
  getUserDynamicly("userId", "params", "_id")
);

usersRouter.get("/:userId", controllers.singleUser);

usersRouter.put("/:userId", controllers.updateUser);

usersRouter.delete("/:userId", controllers.removeUser);

module.exports = usersRouter;
