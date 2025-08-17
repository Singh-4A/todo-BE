

const express = require("express");
const { googleUser } = require("../controllers/googleOath"); // ✅ destructured import

const googleRoute = express.Router();

googleRoute.post("/", googleUser); // ✅ correct usage

module.exports = googleRoute;
