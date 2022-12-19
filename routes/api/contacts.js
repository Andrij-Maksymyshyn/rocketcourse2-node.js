const controllers = require("../../controllers");
const contactsRouter = require("express").Router();

contactsRouter.get("/", controllers.listContacts);

contactsRouter.get("/:contactId", controllers.singleContact);

contactsRouter.post("/", controllers.createContact);

contactsRouter.put("/:contactId", controllers.updateContact);

contactsRouter.delete("/:contactId", controllers.removeContact);

module.exports = contactsRouter;
