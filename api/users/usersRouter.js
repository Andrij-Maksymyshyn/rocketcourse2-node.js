const controllers = require("./controllers");
const mdlwr = require("./middlewares/middleware");
const usersRouter = require("express").Router();

usersRouter.get("/", controllers.listUsers);

usersRouter.post("/", controllers.createUser);

usersRouter.use("/:userId", mdlwr.checkIsUserExists);

usersRouter.get("/:userId", controllers.singleUser);

usersRouter.put("/:userId", controllers.updateUser);

usersRouter.delete("/:userId", controllers.removeUser);

module.exports = usersRouter;
