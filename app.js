const express = require("express");
const { PORT } = require("./configs/variables");
const contactsRouter = require("./routes/api/contacts");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
