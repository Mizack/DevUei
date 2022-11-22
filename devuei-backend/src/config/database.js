const {
    DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT
} = process.env;

module.exports = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
  host: DB_HOST,
  dialect: DB_DIALECT
};
