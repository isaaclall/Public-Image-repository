const router = require("express").Router()
const express = require("express")
const mongoose = require("mongoose")
const userauth = require("../model/userauth")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/signup", (req, res, next) => {
  userauth
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email already exists",
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            })
          } else {
            const newuser = new userauth({
              _id: mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            })
            newuser
              .save()
              .then((result) => {
                res.status(201).json({
                  message: "User Created",
                })
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
      }
    })
})

router.delete("/:userId", async (req, res) => {
  try {
    let user = await userauth.findById(req.params.userId)
    await user.remove()
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

router.post("/login", async (req, res) => {
  let user = await userauth.find({ email: req.body.email })
  if (user.length < 1) {
    return res.status(401).json({
      message: "User does not exist",
    })
  } else {
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: "Auth failed",
        })
      }
      if (result) {
        const user_token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        )
        return res.status(200).json({
          message: "Login Successful",
          token: user_token,
        })
      }
      return res.status(401).json({
        message: "Auth Failed",
      })
    })
  }
})

module.exports = router
