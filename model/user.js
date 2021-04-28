const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  cloudinary_id: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("User", userSchema)
