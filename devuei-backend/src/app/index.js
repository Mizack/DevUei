require("dotenv/config");
const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const initializeDatabases = require("../databases");
const routes = require("./routes");
const generatePayment = require("./services/generateMonthlyPayment");

cron.schedule('* * 25 * *', () => {
    generatePayment();
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initializeDatabases();

module.exports = app;
