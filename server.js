require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const deviceRoutes = require("./routes/deviceRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/device", deviceRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
);