const logger = require("../app/utils/logger");
const sequelizeConnection = require("./sequelizeConnection");

const initializeDatabases = async () => {
	try {
		await sequelizeConnection.sync();
	} catch(error) {
		logger.error(error);
	}
};

module.exports = initializeDatabases;