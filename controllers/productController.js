const Product = require("../models/Product")

const projectsController = {
  productList: async (req, res) => {
    try {
      const products = await Product.find({})
      return res.send(products)
    } catch (error) {
      console.log(error)
      return res.status(500).send("Hubo un error")
    }
  },
  createProduct: async (req, res) => {
    try {
      const product = new Product({
        name: req.body.name,
        price: req.body.price,
      })
      await product.save()

      return res.send({
        status: 200,
        msg: "Producto creado exitosamente",
        details: product,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).send("Hubo un error")
    }
  },
  editProject: async (req, res) => {
    try {
      let product = await Product.findById(req.params.id)
      product.name = req.body.name
      product.price = req.body.price

      const editedProduct = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: product,
        },
        { new: true }
      )

      return res.send({
        status: 200,
        msg: "Producto modificado exitosamente",
        details: editedProduct,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).send("Hubo un error")
    }
  },
  deleteProject: async (req, res) => {
    try {
      await Product.findOneAndDelete({ _id: req.params.id })
      return res.send({
        status: 200,
        msg: "Proyecto elimiando con éxito",
      })
    } catch (error) {
      console.log(error)
      return res.status(500).send("Hubo un error")
    }
  },
}

module.exports = projectsController
