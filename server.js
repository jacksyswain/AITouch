require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

const connectDB = require("./config/db");
const deviceRoutes = require("./routes/deviceRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
const server = http.createServer(app);

// 🔥 Socket.IO setup
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Make io globally accessible
app.set("io", io);

// DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/device", deviceRoutes);

// Error Middleware
app.use(errorHandler);

// Socket connection
io.on("connection", (socket) => {
  console.log("Client connected 🔌");

  socket.on("disconnect", () => {
    console.log("Client disconnected ❌");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
);