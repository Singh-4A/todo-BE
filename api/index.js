const express = require("express");
const dotenv = require("dotenv");
const router = require("../routers/user");
const signupRouter = require("../routers/signupUser");
const todoRouter = require("../routers/todoRoute");
const cors = require("cors");

dotenv.config({ path: "../config.env" }); // adjust if config in root

const app = express();
app.use(express.json());

app.use(
  cors({ origin: ["http://localhost:5173", "https://just-see-one.vercel.app"] })
);
app.use(express.json());
app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);
app.get("/", (req, res) => res.send("Welcome my Api"));

// Export the app for Vercel to handle
module.exports = app;
