// app.js or server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./server/server"); // Assuming this path is correct for your connectionDb.js

// Load environment variables as early as possible
dotenv.config({ path: "./config.env" });

const app = express();
const host = process.env.PORT || 500; // Use PORT from .env or default to 500
const cors = require("cors");

// Middleware
app.use(cors({ origin: ["http://localhost:5173", "https://just-see-one.vercel.app"] }));
app.use(express.json());

// Import and use your routers
const router = require("./routers/user");
const signupRouter = require("./routers/signupUser");
const todoRouter = require("./routers/todoRoute");

app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome my Api");
});

// Start the server ONLY after the database connection is successful
const startServer = async () => {
  try {
    await connectDB(); // Await the database connection
    app.listen(host, () => {
      console.log(`Server running on port ${host}`);
    });
  } catch (error) {
    console.error("Failed to connect to database or start server:", error);
    process.exit(1); // Exit if connection or server fails
  }
};

startServer(); // Call the function to start the server