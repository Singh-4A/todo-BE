const app = require("./api/index");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
dotenv.config({ path: ".env" });

const startServer = async () => {
  try {
    await connectDB();
    console.log(process.env.PORT)
    const port = process.env.PORT || 500;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
};



startServer();

