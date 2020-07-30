const app = require("express");
const router = app.Router();

const productController = require("../controllers/products.controller");

router.get("/", productController.products);

module.exports = router;