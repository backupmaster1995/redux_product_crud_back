const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  price: {
    type: Number,
    require: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model("products", ProductSchema)
