const { Router } = require("express");
const session = require("../controllers/session");

const sessionRoute = Router();

sessionRoute.post("/", session);

module.exports = sessionRoute;
