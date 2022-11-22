const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const coursesRoutes = require("./courses");
const monthlyPayment = require("./monthlyPayment");
const sessionRoute = require("./session");
const usersRoutes = require("./users");

const routes = Router();

routes.use("/courses", authMiddleware, coursesRoutes);
routes.use("/payment", authMiddleware, monthlyPayment);
routes.use("/session", sessionRoute);
routes.use("/users", usersRoutes);

module.exports = routes;
