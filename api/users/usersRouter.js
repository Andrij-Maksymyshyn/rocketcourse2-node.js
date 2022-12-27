const controllers = require("./controllers");
const {
  checkIsUserExists,
  checkIsEmailExists,
  validateNames,
  validateAge,
} = require("./middlewares");
const usersRouter = require("express").Router();

usersRouter.get("/", controllers.listUsers);

usersRouter.post(
  "/",
  validateNames,
  checkIsEmailExists,
  validateAge,
  controllers.createUser
);

usersRouter.use("/:userId", checkIsUserExists);

usersRouter.get("/:userId", controllers.singleUser);

usersRouter.put("/:userId", controllers.updateUser);

usersRouter.delete("/:userId", controllers.removeUser);

module.exports = usersRouter;
