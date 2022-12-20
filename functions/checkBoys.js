const fs = require("node:fs/promises");
const path = require("node:path");
const { boysPath } = require("../pathes");

async function checkBoys() {
  try {
    const dataDir = await fs.readdir(boysPath);
    const arrBoys = [];

    for (const string of dataDir) {
      const pathToFile = path.join(boysPath, string);

      const dataFile = await fs.readFile(pathToFile, "utf-8");

      const parsedFile = JSON.parse(dataFile);
      arrBoys.push(parsedFile);
    }

    arrBoys.forEach((item) => {
      if (item.gender === "female") {
        const GirlNeededToMove = path.join(`${item.name.toLowerCase()}.json`);

        return fs.rename(
          `./boys/${GirlNeededToMove}`,
          `./girls/${GirlNeededToMove}`
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = checkBoys;
