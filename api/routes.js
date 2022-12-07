const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/api/", controller.simpleGetRequest);
router.get("/api/db", controller.dbCall);
router.post("/api/user/signup", controller.signUp);
router.post("/api/user/login", controller.login);
router.get("/api/user/", controller.getAllUsers);

module.exports = { router };
