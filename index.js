const app = require("./api/index");
const dotenv = require("dotenv");
const connectDB = require("./server/server");

dotenv.config({ path: "./config.env" });

const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 500;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
};



startServer();

