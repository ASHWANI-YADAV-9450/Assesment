const express = require("express");
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/db");
const userRoutes = require("./src/routes/userRoutes");
const noteRoutes = require("./src/routes/noteRoutes");
const path = require("path");
const rateLimit = require("express-rate-limit");
connectDatabase();

require("dotenv").config({ path: "config/.env" });

app.use(express.json());
app.use(cors());

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // limit each IP to 1 requests per 1 second
});

app.use(limiter);

app.use("/api/", userRoutes);
app.use("/api/", noteRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
