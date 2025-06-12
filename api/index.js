const express = require("express");
const dotenv = require("dotenv");
const router = require("../routers/user");
const signupRouter = require("../routers/signupUser");
const todoRouter = require("../routers/todoRoute");
const cors = require("cors");

dotenv.config({ path: "../config.env" }); // adjust if config in root

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({ error: err.message });
});


app.use(
  cors({
    origin: ["https://just-see-one.vercel.app"], // Allow your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],       // Allowed methods
    credentials: true                                 // If you're using cookies or auth headers
  })
);

app.use(cors({ origin: "*" }));


app.use(express.json());
app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);
app.get("/", (req, res) => res.send("Welcome my Api"));

// Export the app for Vercel to handle
module.exports = app;
