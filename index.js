const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const authRoute = require("./routes/auth")

// connect to mongo db for images

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err))

// Middleware
app.use(express.json())

// passport middleware

// auth middleware

app.use("/auth", authRoute)

//user middleware
app.use("/user", require("./routes/user"))

app.listen(5000, () => console.log("server is upppp"))

module.exports = app
