const mongoose = require("mongoose")
const imageSchema = new mongoose.Schema({
  public_id: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
})
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
  images: [imageSchema],
})

module.exports = mongoose.model("User", userSchema)
