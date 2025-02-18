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
app.use(cors());
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("YouTube Clone API is running!");
});

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
