const express = require("express")
const clientUser = require("../controllers/client")
const clientRouter = express.Router()

clientRouter.route("/client").post(clientUser)

module.exports = clientRouter