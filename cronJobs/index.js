const cron = require("node-cron");
const removeOldTokens = require("./removeOldTokens");

cron.schedule("0 0 1-30/7 * *", removeOldTokens);
