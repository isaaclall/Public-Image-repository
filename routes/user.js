const router = require("express").Router()
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")
const User = require("../model/user")
const checkAuth = require("../middleware/check-auth")

router.post("/", checkAuth, upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    // use the decoded user token to get email
    const useremail = res.useremail
    const userId = res.userid
    // use email to find document in DB
    const user = await User.findById(userId)
    await user.images.push({
      public_id: result.public_id,
      name: req.body.name,
      url: result.secure_url,
    })
    await user.save()
    res.send("image uploaded")
  } catch (error) {
    console.log(error)
  }
})

router.get("/", checkAuth, async (req, res) => {
  try {
    const useremail = res.useremail
    const userId = res.userid
    const user = await User.findById(userId)
    if (req.query.id == null) {
      res.json(user.images)
    } else {
      for (var i = 0; i < user.images.length; i++) {
        if (user.images[i].public_id == req.query.id) {
          res.send(user.images[i])
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
})

router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const userId = res.userid
    const user = await User.findById(userId)
    // delete image from cloundinary
    await cloudinary.uploader.destroy(req.params.id)
    // delete the image data from mongo db
    let j = -1
    for (var i = 0; i < user.images.length; i++) {
      if (user.images[i].public_id == req.params.id) {
        j = i
      }
    }
    if (j == -1) {
      res.send("Image not found")
    } else {
      user.images.splice(j, 1)
      await user.save()
      res.send("Image Deleted")
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
