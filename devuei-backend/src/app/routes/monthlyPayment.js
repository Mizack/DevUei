const { Router } = require("express");
const {
    read,
    update,
} = require("../controllers/monthlyPayment");

const monthlyPaymentRoutes = Router();

monthlyPaymentRoutes.get("/", read);
monthlyPaymentRoutes.patch("/:monthlyPaymentId", update);

module.exports = monthlyPaymentRoutes;
