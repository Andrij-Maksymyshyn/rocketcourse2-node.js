const dayJs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayJs.extend(utc);

const { deleteManyByParams } = require("../api/auth/services");

module.exports = async () => {
  console.log("Remove old token start", new Date().toISOString());

  const oneWeekBeforeNow = dayJs().utc().subtract(7, "days");

  console.log(oneWeekBeforeNow.format());

  const deletedResult = await deleteManyByParams({
    createdAt: { $lte: oneWeekBeforeNow },
  });
  console.log(deletedResult);

  console.log("Remove old token end", new Date().toISOString());
};
