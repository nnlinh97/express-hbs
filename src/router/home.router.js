const app = require("express");
const router = app.Router();

const homeController = require("../controllers/home.controller");

router.get("/", homeController.home);

module.exports = router;