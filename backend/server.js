import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // ✅ Import connectDBectDB

import authRoutes from './routes/auth.js';
// ...existing code...


// ...existing code...

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// app.use(cors());
const cors = require("cors");

app.use(cors({
  origin: ['http://localhost:3000', 'https://youtube-alpha-hazel.vercel.app'], // Allow local and deployed frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));

app.use('/api/auth', authRoutes);

 app.get("/", (req, res) => {
   res.send("YouTube Clone API is running!");
 });

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// app.listen(3000, () => console.log("Server running on port 3000"));


// Import Routes
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;//5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import videoRoutes from "./routes/videoRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// app.use("/api/videos", videoRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
