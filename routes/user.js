const router = require("express").Router()
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")
const User = require("../model/user")
const checkAuth = require("../middleware/check-auth")

router.post("/", checkAuth, upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)

    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    })
    await user.save()
    res.json(user)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

router.get("/", checkAuth, async (req, res) => {
  try {
    let users = await User.find()
    let userToReturn = null
    users.map((user) => {
      if (user.name === req.params.name) {
        userToReturn = user
      }
    })

    res.json(userToReturn)
  } catch (error) {
    console.log(error)
  }
})

router.delete("/:id", checkAuth, async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    // delete image from cloundinary
    await cloudinary.uploader.destroy(user.cloudinary_id)
    // Delete user from db
    await user.remove()
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

router.put("/:id", checkAuth, upload.single("image"), async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id)
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path)
    const data = {
      name: req.body.name || user.name,
      avatar: result.secure_url || user.avatar,
      cloudinary_id: result.public_id || user.cloudinary_id,
    }
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true })
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
