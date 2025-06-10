const express = require("express");
const signupRouter = express.Router();
const { signup, login } = require("../controllers/signupUser");

// signup user

signupRouter.route("/").post(signup);

signupRouter.post("/login", login);

module.exports = signupRouter;
