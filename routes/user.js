const router = require("express").Router()
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
