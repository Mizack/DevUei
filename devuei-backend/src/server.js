const app = require("./app");
const logger = require("./app/utils/logger");

const { name, version } = require("../package.json");
const { PORT } = process.env;

app.listen(PORT || 8500, () => logger.info(`${name} version ${version} running on port ${PORT|| 3555}`));
