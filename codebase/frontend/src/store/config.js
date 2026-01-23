


// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // or process.env.REACT_APP_API_BASE_URL
  timeout: 15000,
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
