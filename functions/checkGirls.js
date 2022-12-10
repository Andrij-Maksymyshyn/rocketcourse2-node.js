const fs = require("node:fs/promises");
const path = require("node:path");
const { girlsPath } = require("../pathes");

async function checkGirls() {
  const dataDir = await fs.readdir(girlsPath);
  const arrGirls = [];

  for (const string of dataDir) {
    const pathToFile = path.join(girlsPath, string);

    const dataFile = await fs.readFile(pathToFile, "utf-8");

    const parsedFile = JSON.parse(dataFile);
    arrGirls.push(parsedFile);
  }

  arrGirls.forEach((item) => {
    if (item.gender === "male") {
      const BoyNeededToMove = path.join(`${item.name.toLowerCase()}.json`);

      return fs.rename(
        `./girls/${BoyNeededToMove}`,
        `./boys/${BoyNeededToMove}`
      );
    }
  });
}

module.exports = checkGirls;
