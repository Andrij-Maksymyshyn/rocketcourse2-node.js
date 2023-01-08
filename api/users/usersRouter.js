const controllers = require("./controllers");
const {
  getUserDynamicly,
  validateUser,
  checkUserDuplicates,
} = require("./middlewares");
const usersRouter = require("express").Router();

usersRouter.get("/", controllers.listUsers);

usersRouter.post(
  "/",
  validateUser,
  checkUserDuplicates("email", "body"),
  controllers.createUser
);

usersRouter.use("/:userId", getUserDynamicly("userId", "params", "_id"));

usersRouter.get("/:userId", controllers.singleUser);

usersRouter.put("/:userId", controllers.updateUser);

usersRouter.delete("/:userId", controllers.removeUser);

// userRouter.get("/profile", getMyProfile);

module.exports = usersRouter;
