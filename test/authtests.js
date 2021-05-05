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

  it("Signup Existing User", async () => {
    const resp = await request(server).post("/auth/signup").send(existingUser)
    expect(resp.status).to.equal(409)
    expect(resp.body.message).to.be.equal("Email already exists")
  })

  it("Login User", async () => {
    const resp = await request(server).post("/auth/login").send(existingUser)
    expect(resp.status).to.equal(200)
    expect(resp.body.message).to.be.equal("Login Successful")
  })

  it("Login User wrong password", async () => {
    const resp = await request(server)
      .post("/auth/login")
      .send(existingUserwrongpass)
    expect(resp.status).to.equal(401)
    expect(resp.body.message).to.be.equal("Auth Failed")
  })

  it("Login random non user", async () => {
    const resp = await request(server).post("/auth/login").send(testUser)
    expect(resp.status).to.equal(401)
    expect(resp.body.message).to.be.equal("User does not exist")
  })
})
