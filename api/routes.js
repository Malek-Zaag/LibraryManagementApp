const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.simpleGetRequest);
router.get("/db", controller.dbCall);
module.exports = { router };
