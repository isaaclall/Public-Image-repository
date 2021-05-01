const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },

  //TODO: make these schema parameters required
  images: [
    {
      public_id: { type: String },
      name: { type: String },
      url: { type: String },
    },
  ],
})

module.exports = mongoose.model("User", userSchema)
