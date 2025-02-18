import express from "express";
import Video from "../models/Video.js"; // Ensure the file has a .js extension

const router = express.Router();

// Get all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find().populate("user", "username");
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload video
router.post("/", async (req, res) => {
  const { title, description, url, thumbnail, userId } = req.body;

  try {
    const video = await Video.create({ title, description, url, thumbnail, user: userId });
    res.json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get single video
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("user", "username");
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

// import express from "express";
// import Video from "../models/Video.js";

// const router = express.Router();

// // Get all videos
// router.get("/", async (req, res) => {
//   try {
//     const videos = await Video.find();
//     res.json(videos);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;




