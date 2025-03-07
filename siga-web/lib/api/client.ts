"use client";

import axios, { AxiosInstance } from "axios";

function createClientApi(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.API_URL || "http://localhost:8000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return api;
}

export { createClientApi };
