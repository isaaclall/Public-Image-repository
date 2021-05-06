const request = require("supertest")
const chai = require("chai")
const expect = chai.expect

const server = require("../index")

const existingUser = {
  password: "isaaclall",
  email: "isaaclall@gmail.com",
}

describe("Test Image Endpoints", async () => {
  const res = await request(server).post("/auth/login").send(existingUser)
  const token = res.body.token
  let imageID = ""
  describe("Image Upload Endpoints", () => {
    it("Test Image Upload", async () => {
      const resp = await request(server)
        .post("/user")
        .field({ name: "pizza" })
        .attach("image", "/Users/isaac/Desktop/charger missing.jpg")
        .set({ Authorization: `Bearer ${token}` })
      expect(resp.status).to.equal(201)
      expect(resp.body.message).to.be.equal("image uploaded")
      imageID = resp.public_id
    })
  })
})
