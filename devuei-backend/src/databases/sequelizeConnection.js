const logger = require("../app/utils/logger");
const Sequelize = require("sequelize");
const {
    database,
    username,
    password,
    host,
    dialect
} = require("../config/database")

const sequelizeConnection = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect,
        logging: false
    },
);

sequelizeConnection.authenticate().then(() => {
    logger.info(`Sequelize connected to database ${database}`);
}).catch((error) => {
    logger.error(`Sequelize not connected to database: ${error}`);
});

module.exports = sequelizeConnection;
