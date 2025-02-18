import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Fetch all videos
export const fetchVideos = async () => {
  const response = await API.get("/videos");
  return response.data;
};

// Upload a new video
export const uploadVideo = async (videoData) => {
  const response = await API.post("/videos", videoData);
  return response.data;
};

// Register User
export const registerUser = async (userData) => {
  const response = await API.post("/users/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (credentials) => {
  const response = await API.post("/users/login", credentials);
  return response.data;
};
