const request = require("supertest")
const chai = require("chai")
const expect = chai.expect

const server = require("../index")

function generateRandomEmail() {
  var result = ""
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  result += "@sample.com"
  return result
}

const testUser = {
  password: "password",
  email: generateRandomEmail(),
}

const existingUser = {
  password: "isaaclall",
  email: "isaaclall@gmail.com",
}

const existingUserwrongpass = {
  password: "isaac",
  email: "isaaclall@gmail.com",
}

describe("Auth API", () => {
  // test the post route for for user sign up
  it("Signup User", async () => {
    const resp = await request(server).post("/auth/signup").send(testUser)
    expect(resp.status).to.equal(200)
    expect(resp.body.message).to.be.equal("User Created")
  })
})
