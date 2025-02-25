import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
    "teacher-id": 1,
    "class-id": 2,
  },
});

export default api;
