const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.get("/", productController.productList)

router.post("/create", productController.createProduct)

router.put("/edit/:id", productController.editProject)

router.delete("/delete/:id", productController.deleteProject)

module.exports = router
