const { Router } = require("express");
const {
    create,
    read,
    update,
    deleteOne,
    reactivated
} = require("../controllers/users");
const authMiddleware = require("../middlewares/auth");

const usersRoutes = Router();

usersRoutes.post("/", create);
usersRoutes.get("/", authMiddleware, read);
usersRoutes.patch("/", authMiddleware, update);
usersRoutes.delete("/", authMiddleware, deleteOne);
usersRoutes.patch("/:userId", reactivated);

module.exports = usersRoutes;
