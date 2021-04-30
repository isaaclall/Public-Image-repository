const mongoose = require("mongoose")

const userauthSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
})

module.exports = mongoose.model("userauth", userauthSchema)
