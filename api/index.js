const express = require("express");
const dotenv = require("dotenv");
const router = require("../routers/user");
const signupRouter = require("../routers/signupUser");
const todoRouter = require("../routers/todoRoute");
const cors = require("cors");

dotenv.config({ path: ".env" }); // adjust if config in root

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({ error: err.message });
});



app.use(cors({
  origin: ["http://localhost:5173", "https://just-pprlkuwxl-singh-4as-projects.vercel.app/"],
}));




app.use(express.json());
app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);
app.get("/", (req, res) => res.send("Welcome my Api"));
app.use(cors());

// Export the app for Vercel to handle
module.exports = app;
