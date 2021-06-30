const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.get("/", productController.productList)

router.post("/", productController.createProduct)

router.put("/:id", productController.editProject)

router.delete("/:id", productController.deleteProject)

module.exports = router
